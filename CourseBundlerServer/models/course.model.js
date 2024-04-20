import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,'Enter Course title'],
        minLength:[4,'Title must be of 4 length'],
    },
    description:{
        type: String,
        required: [true,'Enter Course title'],
        maxLength:[50,'Title can not exceed 50 characters']
    },

    lectures:[
        {
            title:{
                type:String,
                required: true
            },
            description:{
                type:String,
                required: true,
            },
            video:{
                public_id:{
                    type:String,
                    required: true,
                },
                url:{
                    type:String,
                    required:true
                },
            },
        views:{
            type:Number,
            default:0
        },
        numOfVideos:{
            type: Number,
            default :0,
        },
        category:{
            type: String,
            required:true,
        },
        createdBy:{
            type: String,
            required:[true,'Enter Course Creator name'],
        },
        createdAt:{
            type: Date,
            required:Date.now(),
        },
        }
    ]
});

export const Course = mongoose.model("Course",courseSchema);