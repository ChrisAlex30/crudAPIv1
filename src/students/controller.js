import db from '../../db.js'
import queries from './queries.js'

const getStudents=async(req,res)=>{
    try{
        const result = await db.query(queries.getStudents)
        res.status(201).json(result.rows)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({msg:"Server Error"});
    }    
}

const getStudentById=async(req,res)=>{
    try{
        const {id}=req.params
        if(!id){
            res.status(401).json({msg:"Please Send a Valid Id!!"});
            return
        }
        const result = await db.query(queries.getStudentById,[id])
        res.status(201).json(result.rows)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({msg:"Server Error"});
    }    
}
const addStu=async(req,res)=>{
    try{
        const { name, email, age, dob } = req.body;
        if(!name || !email || !age || !dob){
            res.status(401).json({msg:"Please Fill all Fields!!"});
            return
        }


        const chkEmail = await db.query(queries.chkEmail,[email])
        if(chkEmail.rowCount!==0){
            res.status(401).json({msg:"Student already exists!!"});
            return
        }

        const result = await db.query(queries.addStu,[name, email, age, dob])
        if(result.rowCount!==0)
        res.status(201).json({msg:"Student Saved"});
        else
        res.status(201).json({msg:"Student NOT! Saved"});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({msg:"Server Error"});
    }    
}
const updStu=async(req,res)=>{
    try{
        const { name, email, age, dob } = req.body;
        const {id}=req.params
        if(!name || !email || !age || !dob || !id){
            res.status(401).json({msg:"Please Fill all Fields!!"});
            return
        }
        const result = await db.query(queries.updStu,[name, email, age, dob,id])
        if(result.rowCount!==0)
        res.status(201).json({msg:"Student Updated"});
        else
        res.status(201).json({msg:"Student NOT! Updated"});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({msg:"Server Error"});
    }    
}
const delStu=async(req,res)=>{
    try{
        const {id}=req.params
        if(!id){
            res.status(401).json({msg:"Please Send a Valid Id!!"});
            return
        }
        const result = await db.query(queries.delStu,[id])
        if(result.rowCount!==0)
        res.status(201).json({msg:"Student Deleted"});
        else
        res.status(201).json({msg:"Student NOT! Deleted"});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({msg:"Server Error"});
    }    
}

export default {
    getStudents,getStudentById,addStu,updStu,delStu
}

