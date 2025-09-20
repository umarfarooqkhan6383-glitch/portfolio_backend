import { StatusCodes } from "http-status-codes";
import {db} from "../config/db.js"
import { Prisma } from "@prisma/client";
const createStudent=async(req,res)=>{
  const data=req.body;

  const newStudent=await db.student.create({data:{
    ...data
  }})

  res.status(StatusCodes.CREATED).json({success:true,message:"Student Created Successfully",data:newStudent})
}

export {createStudent}