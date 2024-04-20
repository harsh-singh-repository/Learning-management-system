import express from "express";
import { getAllCourses,getCourseDetails,addLectures } from "../controllers/courseController.js";
import { createCourses } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//View all courses without lectures
router.route("/courses").get(getAllCourses);

//Create new courses only admin
router.route("/createcourses").post(singleUpload,createCourses);

//Add lecture,Delete Course,Get courses details
router.route("/course/:id").get(getCourseDetails).post(singleUpload,addLectures);

// Delete Lectures


export default router;