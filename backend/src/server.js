import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; 
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();
 



const app = express();

app.use("api/auth", authRoutes);
app.use("api/messages", messageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});