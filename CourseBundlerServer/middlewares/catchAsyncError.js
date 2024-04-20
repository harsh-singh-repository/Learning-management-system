export const catchAsynError = (passedfunction)=>(req,res,next)=>{
    Promise.resolve(passedfunction(req,res,next)).catch(next);
}