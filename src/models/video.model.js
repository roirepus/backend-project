import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
	videoFile:{
		type: String, //url
		required: true
	},
	thumbnail:{
		type: String, //url
		required: true
	},
	
	
	title:{
		type: String, //url
		required: true
	},

	
	
	duration:{
		type: Number, //url
		required: true
	},
	description:{
		type: String, //url
		required: true
	},
	views: {

		type: Number,
		default: 0
	},
	isPublished: {
		type: Boolean,
		default: true,
	},
	owner:{
		type: Schema.Types.ObjectId,
		ref : "User"
	}



},{timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)
