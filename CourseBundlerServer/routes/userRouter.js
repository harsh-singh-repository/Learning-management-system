import express from "express";
import {changePassword, forgetPassword, logout, register, updateProfile, updateProfilePicture,resetPassword, addToPlaylist, removeFromPlaylist} from "../controllers/userController.js";
import { login } from "../controllers/userController.js";
import { isAuthenicated } from "../middlewares/auth.js";
import { getmyprofile } from "../controllers/userController.js";

const user = express.Router();

// @desc    Login User
user.route("/register").post(register);

// @desc Logs out the current logged in user and redirects to home page.
user.route("/login").post(login);

// log out route - simply logs the session out and redirects to homepage.
user.route("/logout").get(logout);

// get my profile
user.route("/me").get(isAuthenicated,getmyprofile);

// change Password
user.route("/changepassword").put(isAuthenicated,changePassword);

// Update Profile
user.route("/updateprofile").put(isAuthenicated,updateProfile);

// Update Profile Picture
user.route("/updateprofilepicture").put(isAuthenicated,updateProfilePicture);

// forget password
user.route("/forgetpassword").post(forgetPassword);

// Reset Password
user.route("/resetpassword/:token").put(resetPassword);

// Add to playlist
user.route("/addtoplaylist").post(isAuthenicated,addToPlaylist);

// Remove from Playlist
user.route("/removefromplaylist").delete(isAuthenicated,removeFromPlaylist)




export default user;