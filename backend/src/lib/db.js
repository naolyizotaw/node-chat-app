import mongoose from "mongoose";    


export const connectDB = async () => {
    try {
        const {MONGO_URI} = process.env;
        if(!MONGO_URI) throw new Error("MONGO_URI is not defined in environment variables");
        
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected: ${connect.connection.host}, ${connect.connection.name}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);    
    }
}