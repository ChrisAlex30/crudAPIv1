import express from "express";
import stuRoutes from "./src/students/routes.js"

const app=express()
app.use(express.json())


app.get('/',(req,res)=>res.send('Hello'))


//Students Routes//
app.use('/api/students',stuRoutes)




app.listen(3000,()=>{console.log('app started');})