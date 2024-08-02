import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
	try {
		const conncectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
		console.log(`mongodb connected!! db host: ${conncectionInstance.connection.host}`);
	} catch (error) {
		console.log("mongodb connection error: ", error);
		process.exit(1)
	}
}
