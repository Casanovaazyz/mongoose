const mongoose = require ('mongoose')

const  connectddb =async ()=>{
    try{
       await mongoose.connect("mongodb+srv://casanova:acab1312@cluster0.utwodag.mongodb.net/?retryWrites=true&w=majority")
console.log('you are connected to the db')
    }catch(err){
console.log(err)
    }
}





module.exports = connectddb ;