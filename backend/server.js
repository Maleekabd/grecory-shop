import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoutes.js";
import cors from "cors";
import connectToMongoDB from "./Database/db.js";

dotenv.config();
connectToMongoDB();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server running on port : " + PORT);
});
