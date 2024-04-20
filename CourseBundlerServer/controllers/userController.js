import { catchAsynError } from "../middlewares/catchAsyncError.js";
import { Course } from "../models/course.model.js";
import { User } from "../models/user.model.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendToken } from "../utils/sendToken.js";
import crypto from "crypto";

export const register = catchAsynError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new ErrorHandler("Please Enter all Field", 400));
  }

  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists", 409));
  }

  // Upload file on Cloudinary
  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "Temp",
      url: "Tempurl",
    },
  });
  sendToken(req, res, user, "Registered Succesfully", 201);
});

export const login = catchAsynError(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("User doesn't exist", 401));
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return next(new ErrorHandler("Incorrect email or password", 401));
  }

  sendToken(req, res, user, `Welcome back ${user.name}`, 200);
});

export const logout = catchAsynError(async (req, res, next) => {
  res
    .status(200)
    .cookie("Token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logout successfully",
    });
});

export const getmyprofile = catchAsynError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});

export const changePassword = catchAsynError(async (req, res, next) => {
  const { oldpassword, newPassword } = req.body;

  if (!oldpassword || !newPassword) {
    return next(new ErrorHandler("Please enter all field", 400));
  }

  const user = await User.findById(req.user._id).select("+password");

  const isMatch = await user.comparePassword(oldpassword);

  if (!isMatch) {
    return next(new ErrorHandler("Incorrect Old Password", 400));
  }

  user.password = newPassword;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Changed successfully",
  });
});

export const updateProfile = catchAsynError(async (req, res, next) => {
  const { email, name } = req.body;

  const user = await User.findById(req.user._id);

  if (email) user.email = email;
  if (name) user.name = name;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile Updated Sucessfully",
  });
});

export const updateProfilePicture = catchAsynError(async (req, res, next) => {
  //Cloudnary Todo

  res.status(200).json({
    success: true,
    message: "Profile Picture Updated Sucessfully",
  });
});

export const forgetPassword = catchAsynError(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) return next(new ErrorHandler("User not found", 400));

  const resetToken = await user.getResetToken();

  await user.save();

  // send token via email
  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
  const message = `Click on the link to reset your password ${url} .If you have not send please ignore.`;

  await sendEmail(user.email, "CourseBundler reset password", message);

  res.status(200).json({
    success: true,
    message: `Reset Token has been send to ${user.email}`,
  });
});

export const resetPassword = catchAsynError(async (req, res, next) => {
  const { token } = req.params;

  const ResetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    ResetPasswordToken,
    ResetPasswordExpire: {
      $gt: Date.now(),
    },
  });

  if (!user)
    return next(
      new ErrorHandler(
        "Token is Invalid or has been expired. Please try again.",
        400
      )
    );

  user.password = req.body.password;

  user.ResetPasswordExpire = undefined;
  user.ResetPasswordToken = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Change Successfully",
  });
});

export const addToPlaylist = catchAsynError(async(req,res,next)=>{
   
    const user = await User.findById(req.user._id);

   const course = await Course.findById(req.body._id);


   if(!course) return next(new ErrorHandler("Invalid Course",400));

   const itemExist = user.playlist.find((item)=>{
      if(item.course.toString() === course._id.toString()) return true
   })

   if(itemExist) return next(new ErrorHandler("Playlist already exist",400))

   user.playlist.push({
    course:course._id,
    poster:course.poster,
   })

   await user.save();

    res.status(200).json({
        success:true,
        message:"Added to Playlist"
    })
})

export const removeFromPlaylist = catchAsynError(async(req,res,next)=>{

    const user = await User.findById(req.user._id);

    const course = await Course.findById(req.query._id);
 
    if(!course) return next(new ErrorHandler("Invalid Course",400));
 
    const newPlaylist = user.playlist.filter((item)=> {
        if(item.course.toString() !== course._id.toString()) return item;
    })
    
    user.playlist = newPlaylist;
    
    await user.save();

    res.status(200).json({
        success:true,
        message:"Remove to Playlist"
    })
})