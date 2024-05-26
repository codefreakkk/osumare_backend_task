import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI as string;
        await mongoose.connect(MONGO_URI);
        console.log(`Connected to DB`);
    } catch(error) {
        console.log(`Error occured while connecting to db`);
    }

}