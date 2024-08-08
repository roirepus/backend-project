import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});


//async await coz it will take time
const uploadOnCloudinary = async (localFilePath)=>{
	try{
		if(!localFilePath)return null
		//file uploading
		const response = await cloudinary.uploader.upload(localFilePath ,{
			resource_type: "auto"
		})
		//upload successful 
		console.log("file uploaded on cloudinary")
		console.log(response.url)
		return response;

	}catch(error){
		fs.unlinkSync(localFilePath)//remove locally saved file
		return null
	}
}
export {uploadOnCloudinary}

