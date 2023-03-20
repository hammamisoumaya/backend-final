const mongoose = require('mongoose')

const connectdb=async()=>{
try{
    await  mongoose.connect('mongodb+srv://Hammami-soumaya:tI73evmRpX4oX5xg@cluster0.supdgew.mongodb.net/?retryWrites=true&w=majority')
    console.log("you are connected to database")
}
catch(err){
    console.log(err)
}
}

module.exports = connectdb;