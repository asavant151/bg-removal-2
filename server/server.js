import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import connectDB from "./configs/mongodb.js";

dotenv.config(); 

// App Config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

// Intialize Middlewares
app.use(express.json());
app.use(cors());

// API routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
