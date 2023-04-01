const mongoose = require('mongoose')

const connectdb=async()=>{
try{
    //    await  mongoose.connect('mongodb+srv://kamikaze:5wpCJguOkMFaoBKP@cluster0.yyu5ygj.mongodb.net/?retryWrites=true&w=majority')
    console.log("you are connected to database")
}
catch(err){
    console.log(err)
}
}

module.exports = connectdb;