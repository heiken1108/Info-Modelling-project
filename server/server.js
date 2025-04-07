import express from 'express';
import mongoose from 'mongoose';
import CuisineModel from './models/Cuisine.js';
import ItemModel from './models/Item.js';
import NarrativeModel from './models/Narrative.js';

const app = express();
app.use(express.json());
const port = 5001;

//Connect to MongoDB
mongoose
	.connect(
		'mongodb+srv://user:123@infomodelling.ccse3.mongodb.net/NorwegianCuisine'
	)
	.then(() => console.log('Connection to MongoDB established'))
	.catch((err) => console.error('MongoDB connection error:', err));

mongoose.connection.once('open', () => {
	console.log('MongoDB connected successfully to NorwegianCuisine database');
});

//API Endpoints
app.get('/api/cuisine', async (req, res) => {
	try {
		const cuisines = await CuisineModel.find({});
		res.json(cuisines);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get('/api/cuisine/:cuisineId', async (req, res) => {
	try {
		const cuisine = await CuisineModel.findOne({
			cuisineId: req.params.cuisineId,
		});
		if (!cuisine)
			return res.status(404).json({ message: 'Cuisine not found' });
		res.json(cuisine);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get('/api/item', async (req, res) => {
	try {
		const items = await ItemModel.find({});
		if (!items) return res.status(404).json({ message: 'Item not found' });
		res.json(items);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get('/api/item/:itemId', async (req, res) => {
	try {
		const id = new mongoose.Types.ObjectId(req.params.itemId);
		const item = await ItemModel.findById(id);
		if (!item) return res.status(404).json({ message: 'Item not found' });
		res.json(item);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get('/api/narrative', async (req, res) => {
	try {
		const narratives = await NarrativeModel.find({});
		if (!narratives)
			return res.status(404).json({ message: 'Narratives not found' });
		res.json(narratives);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get('/api/narrative/:narrativeId', async (req, res) => {
	try {
		const id = new mongoose.Types.ObjectId(req.params.narrativeId);
		const narrative = await NarrativeModel.findById(id);

		if (!narrative)
			return res.status(404).json({ message: 'Narrative not found' });
		res.json(narrative);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get('/api/narrativeFull/:narrativeId', async (req, res) => {
	try {
		const id = new mongoose.Types.ObjectId(req.params.narrativeId);
		const narrative = await NarrativeModel.findById(id).populate(
			'chapters.items'
		);

		if (!narrative)
			return res.status(404).json({ message: 'Narrative not found' });
		res.json(narrative);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
