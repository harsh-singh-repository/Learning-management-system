import  express  from "express";
import {config} from "dotenv";
import ErrorMiddleware from "./middlewares/error.js";
import cookieParser from "cookie-parser";

config({
    path:'./config/.env'
})
const app = express();


// Using middlerware
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}))

app.use(cookieParser());

import course from "./routes/courseRouter.js"
import user from "./routes/userRouter.js";
app.use("/api/v1",course);
app.use("/api/v1",user);



export default app;
app.use(ErrorMiddleware);