import { loadEnv } from 'vite'
import express from 'express'
import mongoose from 'mongoose'
import cors  from 'cors'
const app =express()

app.use(
    cors({
        origin:"*"
    })
)
import Note from './server/models/noteModel.cjs'

// const recieveData=require('./models/notesModel')
const DB = `mongodb+srv://captain:pZ4rLf69ZqxmXHWq@cluster0.dh5f2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


mongoose.connect(DB,{}).then(()=>{
    console.log("connection Succesfull")

}).catch((err)=>{
    console.log("no Connection " ,err)
})


app.use(express.json()) 
import routes from './server/routes/noteRoute.mjs'
app.use(routes)



app.listen(3001, function(){
    console.log("Express on local host 6000")
})

export default app;