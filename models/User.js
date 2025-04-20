import mangoose from "mangoose"
 

 const userSchema= new mangoose.schema({
    name:{type:string, required:true},
    email:{type:string,required:true},
    password:{type:string,required:true},
    isAdmin:{type:Boolean,required:true,default:false}
})
const User=mongoose.models.User || mongoose.model('User',userSchema)
export default User