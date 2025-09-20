import { Router } from "express";
import { JoiSchemaValidation } from "../middlewares/validation.js";
import { studentSchema } from "../schemas/userSchema.js";
import { createStudent } from "../controllers/studentController.js";
const student_router=Router();

student_router.post("/students",JoiSchemaValidation(studentSchema),createStudent)


export {student_router}