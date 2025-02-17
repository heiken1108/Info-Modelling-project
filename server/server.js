import express from 'express';
import mongoose from 'mongoose';
import CuisineModel from './models/Cuisine.js';

const app = express();
app.use(express.json());

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
		console.log('Fetching cuisins');
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

app.listen(5001, () => {
	console.log('Server is running on port 5001');
});
