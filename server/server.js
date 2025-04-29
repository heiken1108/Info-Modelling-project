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
/*
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
});*/

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

/**
 * Narratives
 * /api/narrative
 * Hente ut alle narratives
 * Få ut alle narrative-titler, id til narrativet
 */

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

/**
 * Narrative
 * /api/narrative/:narrativeId
 * Hente ut narrative med id
 * Få ut Narrative-tittel, narrativ-description, chapters (navn, description, indeks i listen av chapters)
 */

app.get('/api/narrative/:narrativeId', async (req, res) => {
	try {
		const id = new mongoose.Types.ObjectId(req.params.narrativeId);
		const narrative = await NarrativeModel.findById(id);

		if (!narrative)
			return res.status(404).json({ message: 'Narrative not found' });

		res.json({
			id: narrative._id,
			title: narrative.title,
			description: narrative.description,
			chapters: narrative.chapters.map((chapter, index) => {
				return {
					title: chapter.title,
					introduction: chapter.introduction,
					chapterIndex: index,
				};
			}),
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

/**
 * Chapter
 * /api/narrative/:narrativeId/chapter/:chapterIndex
 * Hente ut chapter etter index i listen til et narrative
 * Få ut Chapter navn, chapter description, peker til første item i listen til chapter (hvis det finnes), peker til siste item i forrige liste (hvis det finnes), peker til neste chapter (hvis det finnes), peker til forrige chapter (hvis det finnes)
 */
app.get(
	'/api/narrative/:narrativeId/chapter/:chapterIndex',
	async (req, res) => {
		try {
			const narrativeId = new mongoose.Types.ObjectId(
				req.params.narrativeId
			);
			const narrative = await NarrativeModel.findById(narrativeId);
			const chapterIndex = Number(req.params.chapterIndex);

			const chapter = narrative.chapters[chapterIndex];
			if (!chapter)
				return res.status(404).json({ message: 'Chapter not found' });

			const previousChapterPointer =
				chapterIndex > 0
					? `/narrative/${narrativeId}/chapter/${chapterIndex - 1}`
					: null;
			const nextChapterPointer =
				chapterIndex < narrative.chapters.length - 1
					? `/narrative/${narrativeId}/chapter/${chapterIndex + 1}`
					: null;

			const previousItemPointer =
				chapterIndex > 0 &&
				narrative.chapters[chapterIndex - 1].items.length > 0
					? `/narrative/${narrativeId}/chapter/${
							chapterIndex - 1
					  }/item/${narrative.chapters[chapterIndex - 1].items[
							narrative.chapters[chapterIndex - 1].items.length -
								1
					  ].toString()}`
					: null;
			const nextItemPointer =
				narrative.chapters[chapterIndex].items.length > 0
					? `/narrative/${narrativeId}/chapter/${chapterIndex}/item/${narrative.chapters[
							chapterIndex
					  ].items[0].toString()}`
					: null;

			res.json({
				title: chapter.title,
				introduction: chapter.introduction,
				previousChapterPointer,
				nextChapterPointer,
				previousItemPointer,
				nextItemPointer,
				items: chapter.items,
			});
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
);

/**
 * Item
 * /api/narrative/:narrativeId/chapter/:chapterIndex/item/:itemId
 * Hente ut item med Id
 * Få ut name, translation, descriptionsene, imageUrl, peker til neste item, peker til forrige item, peker til neste chapter, peker til forrige chapter
 */
app.get(
	'/api/narrative/:narrativeId/chapter/:chapterIndex/item/:itemId',
	async (req, res) => {
		try {
			const narrativeId = new mongoose.Types.ObjectId(
				req.params.narrativeId
			);
			const narrative = await NarrativeModel.findById(narrativeId);
			const chapterIndex = Number(req.params.chapterIndex);
			const chapter = narrative.chapters[chapterIndex];
			const itemId = new mongoose.Types.ObjectId(req.params.itemId);
			const item = await ItemModel.findById(itemId);

			if (!item)
				return res.status(404).json({ message: 'Item not found' });
			if (!chapter.items.includes(itemId))
				return res
					.status(400)
					.json({ message: 'Item is not in this chapter' });

			const previousChapterPointer =
				chapterIndex >= 0
					? `/narrative/${narrativeId}/chapter/${chapterIndex}`
					: null;
			const nextChapterPointer =
				chapterIndex < narrative.chapters.length - 1
					? `/narrative/${narrativeId}/chapter/${chapterIndex + 1}`
					: null;
			const previousItemPointer =
				chapter.items.indexOf(itemId) > 0
					? `/narrative/${narrativeId}/chapter/${chapterIndex}/item/${chapter.items[
							chapter.items.indexOf(itemId) - 1
					  ].toString()}`
					: null;
			const nextItemPointer =
				chapter.items.indexOf(itemId) < chapter.items.length - 1
					? `/narrative/${narrativeId}/chapter/${chapterIndex}/item/${chapter.items[
							chapter.items.indexOf(itemId) + 1
					  ].toString()}`
					: null;

			res.json({
				_id: item._id,
				name: item.name,
				translation: item.translation,
				introductoryDescriptions: item.introductoryDescriptions,
				averageDescriptions: item.averageDescriptions,
				advancedDescriptions: item.advancedDescriptions,
				imageUrl: item.imageUrl,
				previousChapterPointer,
				nextChapterPointer,
				previousItemPointer,
				nextItemPointer,
				fileName: item.fileName
			});
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
);
