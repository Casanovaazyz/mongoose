const express = require ('express')

const ContactRouter = express.Router()
// jiben el schema
const {getContact,updatecontact,deleteContact,Addcontact} = require('../Controllers/contact')
//route get all users
ContactRouter.get('/getall',getContact)
//route post a user

ContactRouter.post('/',Addcontact)

//route put or update a user 
ContactRouter.delete('/:id',deleteContact)


// put 
ContactRouter.put('/:id',updatecontact)



module.exports = ContactRouter  