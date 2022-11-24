const ContactSchema = require ('../model/contact')

exports.getContact = async(req,res)=>{
    try{
        const contacts = await ContactSchema.find()
res.status(200).send({msg:"les users kolla jouk ",contacts})

    }catch(err){
        res.send('msg error')
        console.log(err)
    }
}

exports.Addcontact=(req,res)=>{
    try{
    const newContact = new ContactSchema(req.body)
    newContact.save()
    res.status(200).send({msg:'you did it , the contact is added',newContact})
    
    }catch(err){
        res.status(500).send('could not add a user')
    }
    
}


exports.deleteContact =(req,res)=>{
    try{
        const {id}= req.params
        const deleteuser = ContactSchema.findByIdAndDelete(id)
        res.status(200).send('yes you did it')
         
        }catch(err){
        res.status(500).send('could not delete') 
        }
    }


exports.updatecontact = async(req,res)=>{
    try{
        const {id}= req.params
        const updateContact = await  ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send('the user is updated',updateContact)

    }catch(err){
        res.status(500).send('you couldnt update it')
    }
}