import jwt from "jsonwebtoken"
import { catchAsynError } from "./catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/user.model.js";

export const isAuthenicated = catchAsynError(async(req,res,next)=>{
      const token = req.cookies.Token;

      if(!token) return next(new ErrorHandler("Not Logged In",401));
      const decoded = jwt.verify(token,process.env.JWT_SECRET);

      req.user = await User.findById(decoded._id);
      next();
})