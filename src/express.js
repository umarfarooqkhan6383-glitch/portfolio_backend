import express from "express";
import cors from "cors";   // ✅ import cors
import { StatusCodes } from "http-status-codes";
import { config } from "./config/config.js";

// Routes import
import { student_router } from "./routes/studentRoutes.js";

const app = express();

// ✅ Enable CORS
app.use(cors({
  origin: "http://localhost:5173", // sirf frontend origin allow hoga
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({
    status: true,
    message: "Server is running successfully",
  });
});

// Routes
app.use("/api/v1", student_router);

// Start server
app.listen(3000, () => {
  console.log(`🚀 Server running on http://localhost:3000`);
});
