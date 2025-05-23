import mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	translation: {
		type: String,
		required: true,
	},
	introductoryDescriptions: {
		type: [String],
		required: true,
	},
	averageDescriptions: {
		type: [String],
		required: true,
	},
	advancedDescriptions: {
		type: [String],
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	fileName: {
		type: String,
		required: true,
	},
	qrCode: {
		type: String,
		required: true,
	},
	origin: {
		type: String,
		required: true,
	},
	flavorProfile: {
		type: String,
		required: true,
	},
	period: {
		type: String,
		required: true,
	},
});

const ItemModel = mongoose.model('Items', ItemSchema);
export default ItemModel;
