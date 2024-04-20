import {catchAsynError} from "../middlewares/catchAsyncError.js";
import getDataUri from "../middlewares/dataUri.js";
import {Course} from "../models/course.model.js";
import cloudinary from "cloudinary"
import ErrorHandler from "../utils/errorHandler.js";

export const getAllCourses = catchAsynError(async(req,res,next)=>{
     const course = await Course.find();
     res.status(200).json({
          success:true,
          course,
     });
})

export const createCourses = catchAsynError(async(req,res,next)=>{
     
     const {title,description,category,createdBy} = req.body;

     const file = req.file;

     const fileUri = getDataUri(file);

     const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);
      
     
     if(!title || !description || !category || !createdBy){
          return next(new ErrorHandler("Please add all fields",400));
     }

     await Course.create({
          title,
          description,
          category,
          createdBy,
          poster:{
               public_id:myCloud.public_id,
               url:myCloud.secure_url
          }
     })

     res.status(201).json({
          success:true,
          message:"Course Created Successfully."
     });
})

export const getCourseDetails = catchAsynError(async(req,res,next)=>{

     const course = await Course.findById(req.params.id);  

     if(!course) next(new ErrorHandler("Course Not found",404));

     course.view += 1;
     
     await course.save();

     res.status(200).json({
          success:true,
          lectures:course.lectures,
          message:"Details Found"
     })
})


export const addLectures = catchAsynError(async(req,res,next)=>{
     const {id} = req.params;
     const {title,description} =  req.body;

     // const file = req.file;

     const course = await Course.findById(req.params.id); 

     if(!course) next(new ErrorHandler("Course Not found",404));

     // Upload Files
     course.lectures.push({
          title,
          description,
          video : {
               public_id: "url",
               url:"temp_url"
          }
     })

     const noOfVideos  = course.lectures.length;
     
     await course.save();

     res.status(200).json({
          success:true,
          message:"Lectures Added to course"
     })
})