import { Router } from "express";
import { JoiSchemaValidation } from "../middlewares/validation.js";
import { studentSchema } from "../schemas/userSchema.js";
import { createStudent } from "../controllers/studentController.js";
import { Hireme } from "../controllers/studentController.js";
import { hireschema } from "../schemas/userSchema.js";
const student_router=Router();

student_router.post("/students",JoiSchemaValidation(studentSchema),createStudent)

const hiremeRouter = Router();
 hiremeRouter.post("/hireme", JoiSchemaValidation(hireschema), Hireme);
export {student_router, hiremeRouter}