//requrie('dotenv').config({path: './env'})
import exress from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { app } from './app.js';
dotenv.config({
	path: './env'
})
import { connectDB } from "./db/index.js";
const PORT= process.env.PORT||6000

connectDB().then(
	() => {
		app.listen(PORT,()=>{
			console.log(`app is listening on port: ${PORT}`)
		})
	}
).catch( (error) => {
	console.log("mongodb connection error: ", error)
		
}
)
	








// import express from "express";
// const app = express()
// ; (async () => {
// 	try {
//
// 		await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// 		app.on("error", (error) => {
// 			console.log("error: ", error);
// 			throw error
// 		})
// 		app.listen(process.env.PORT,()=>{
// 			console.log(`app listening on ${process.env.PORT}`);
// 		})
// 	}
// 	catch (error) {
// 		console.error("error: ", error)
// 		throw err
// 	}
// })()
