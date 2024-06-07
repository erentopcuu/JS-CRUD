const express = require("express")
const mongoose = require("mongoose")
const CustomerRouter = require("./router/CustomerRouter")

const app = express()

mongoose.connect("mongodb+srv://erentopcu:erentopcu@erentopcuoglu.hp7lvcf.mongodb.net/?retryWrites=true&w=majority&appName=erentopcuoglu")
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err))




app.use(express.json())
app.use("/customer", CustomerRouter)

app.listen(3030,()=>{
    console.log("port çalısıyor")
})