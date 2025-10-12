import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; 
import messageRoutes from "./routes/messageRoutes.js";
import path from "path";
import { connectDB } from "./lib/db.js";

dotenv.config();
 



const app = express();
const __dirname = path.resolve(); 

//Middleware 
app.use(express.json());// req.body

//Routes 
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);



//make ready for deployment 
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (_, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
    });
};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    connectDB();
});   