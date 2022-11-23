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


exports.deleteContact =async (req,res)=>{
try{

}catch(err){
    console.log(err)
}
}


exports.updatecontact = async(req,res)=>{
    try{
        
    }catch(err){
        console.log(err)
    }
}