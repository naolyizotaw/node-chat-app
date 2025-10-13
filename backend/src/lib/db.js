import mongoose from "mongoose";    
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        const {MONGO_URI} = ENV;
        if(!MONGO_URI) throw new Error("MONGO_URI is not defined in environment variables");
        
        const connect = await mongoose.connect(ENV.MONGO_URI);
        console.log(`Database connected: ${connect.connection.host}, ${connect.connection.name}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);    
    }
}