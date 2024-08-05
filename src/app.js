import express, { urlencoded } from "express";

import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import { DB_NAME } from "./constants.js";
dotenv.config({
	path: './env'
})
const PORT = process.env.PORT || 8000
const app = express()

	; (async () => {
		try {

			await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
			app.on("error", (error) => {
				console.log("error: ", error);
				throw error
			})
			app.listen((PORT) => {
				console.log(`app listening on: ${PORT}`);
			})
		}
		catch (error) {
			console.log("error: ", error);
			process.exit(1)
		}

	})()
app.use(cors({
	origin: process.env.CORS_ORIGIN,
}))

//json and url limit set
app.use(express.json({ limit: "16kb" }))
app.use(urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public")) //save files from usr at server
app.use(cookieParser())

export { app };

