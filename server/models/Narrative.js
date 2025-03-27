// models/Narrative.js
import mongoose from 'mongoose';
import ItemModel from './Item.js'; // Import the Item model

const ChapterSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	introduction: {
		type: String,
		required: true,
	},
	items: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Items',
			required: true,
		},
	],
});

const NarrativeSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	chapters: {
		type: [ChapterSchema],
		required: true,
	},
});

const NarrativeModel = mongoose.model('Narratives', NarrativeSchema);
export default NarrativeModel;
