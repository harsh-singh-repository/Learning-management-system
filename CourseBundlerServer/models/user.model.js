import dotenv from "dotenv"
import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto"

dotenv.config();

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter Your Name"],
    },
    email:{
        type:String,
        required:[true,"Enter your Email"],
        unique: true,
        validate:validator.isEmail,
    },
    password:{
        type:String,
        required: [true, 'Please provide a Password'],
        minLength: [6,'Password must be of six character'],
        select:false,
    },
    role:{
        type:String,
        enum: ['admin','user'],
        default:'user'
    },
    subscription:{
        id:String,
        status:String,
    },
    avatar:{
        public_id:{
            type: String,
            required:true,
        },
        url:{
            type: String,
            required:true,
        }
    },
    playlist:[
        {
            course:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Course",
            },
            poster:String,
        }
    ],
    cretedAt:{
        type:Date,
        default: Date.now(),
    },
    ResetPasswordToken:String,
    ResetPasswordExpire:String,
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    const hashedPassword = await bcrypt.hash(this.password,10);
    this.password=hashedPassword;
    next();
})

userSchema.methods.getJWTToken = function (){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{
        expiresIn: "15d",
    })

    return token;
}

userSchema.methods.comparePassword = async function(password){
   return await bcrypt.compare(password,this.password);
}

userSchema.methods.getResetToken = async function(){
  const resetToken = crypto.randomBytes(20).toString('hex');
  
  this.ResetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  
  this.ResetPasswordExpire = Date.now()+15*60*1000; //expires in 15 mins

   return resetToken;
}

export const User = mongoose.model("User",userSchema);