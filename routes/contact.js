const express = require('express')
const ContactRouter = express.Router()
const ContactSchema = require('../model/contact')


ContactRouter.post('/',async(req,res)=>{
    try{
    const NewContact = ContactSchema(req.body)
    await NewContact.save()
    res.status(200).send({msg:"contact ajouté",NewContact})
   
    }catch(err){
        console.log(err)
        res.status(500).send("could not add a user")
    }
    })


    module.exports = ContactRouter