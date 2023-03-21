const express = require('express')
const ContactRouter = express.Router()
const ContactSchema = require('../model/contact')

ContactRouter.get('/getuser',async(req,res)=>{
    try{
        const contc = await ContactSchema.find()
        res.status(200).json({msg:'this is ur user list',contc})
    }catch(err){
        console.log(err)
    }
})


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

    ContactRouter.put('/updateuser/:id',async(req,res)=>{
        try{
    const {id}=req.params
    const updateuser = await  ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
    res.status(200).json({msg:"you could update me",updateuser})
        }catch(err){
            console.log(err)
        }
    })
    
    ContactRouter.delete('/deleteuser/:id',async(req,res)=>{
        try{
            const {id}=req.params
            const deletcont = await ContactSchema.findByIdAndDelete(id)
            res.status(200).json({msg:'you deleted that user'})
        }catch(err){
            console.log(err)
        }
    })
    
    ContactRouter.get('/getuser/:id',async(req,res)=>{
        try{
            const {id}=req.params
            const getuniqueuser = await ContactSchema.findById(id)
            res.status(200).json({msg:'you found that user',getuniqueuser})
        }catch(err){
            console.log(err)
        }
    })
    


    module.exports = ContactRouter