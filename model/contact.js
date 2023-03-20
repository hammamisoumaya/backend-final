const mongoose= require ("mongoose")



const ContactSchema = mongoose.Schema({
   name:String,
    age:Number,
    email:{
        type:String,
        require:true,
        unique:true
    }
    
   
    
})

module.exports = mongoose.model("contactee",ContactSchema)