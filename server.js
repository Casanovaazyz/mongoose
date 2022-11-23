const express = require ('express')
const connectddb = require ('./config/connectdb')
const ContactRouter = require('./routes/contact')
const app = express ()
const port = 5000
//link bil db
connectddb()


//Nraj3ou  lil partie

app.use(express.json())
app.use('/api/user',ContactRouter)


app.listen(port,err=>{
    err?console.log(err):console.log(`you did it go to the port num : ${port}`)
})