import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("💥 MONGODB CONNECTION ERROR:", error);
        process.exit(1);
    }   
};