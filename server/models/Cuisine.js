import mongoose from 'mongoose';

const CuisineSchema = new mongoose.Schema(
	{
		cuisineId: {
			type: Number,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		translation: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image_url: {
			type: String,
			required: true,
		},
		source_url: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
		// Set the collection name explicitly to 'cuisine' (singular)
		collection: 'cuisine',
	}
);

const CuisineModel = mongoose.model('Cuisine', CuisineSchema, 'cuisine');
export default CuisineModel;
