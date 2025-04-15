import { useNavigate, useParams } from 'react-router-dom';
import { Item } from '../lib/types';
import { useEffect, useState } from 'react';
import '../styling/itemPage.css';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function ItemPage() {
	const { itemId } = useParams<{ itemId: string }>();
	const [item, setItem] = useState<Item>();

	const chapterIndex = Number(sessionStorage.getItem('chapterIndex'));
	const chapterIntroductions = JSON.parse(
		sessionStorage.getItem('chapters') || '[]'
	);

	useEffect(() => {
		fetch(`/api/item/${itemId}`)
			.then((res) => {
				console.log(res);
				if (!res.ok) {
					if (res.status === 404) {
						throw new Error('Cuisine not found');
					}
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				return res.json();
			})
			.then((data) => {
				const item: Item = {
					_id: data.itemId,
					name: data.name,
					translation: data.translation,
					introductoryDescriptions: data.introductoryDescriptions,
					averageDescriptions: data.averageDescriptions,
					advancedDescriptions: data.AdvancedDescriptions,
					imageUrl: data.imageUrl,
					qrCode: null,
				};
				setItem(item);
			});
	});

	if (!item) {
		return <div>Loading...</div>;
	}
	

	return (
		<div>
			<div>
				<div className='nav-buttons'>
					<ChapterNavigation numberOfChapters={chapterIntroductions.length} />
				</div>
			<h1 style={{ textAlign: 'center' }}>{item.name}</h1>
				<div className='item-container'>
					{item.imageUrl && (
						<img src={item.imageUrl} alt={item.name}/>
					)}
				<div className='information-container'>
					<p>This is the item page.</p>
					<p>Item ID: {itemId}</p>
					<p>Item Name: {item.name}</p>
					<p>Item Translation: {item.translation}</p>
				</div>
				</div>
				<div className='nav-buttons'>
				<ItemNavigation
					numberOfItems={chapterIntroductions[chapterIndex].items.length}
				/>
				</div>
				
			</div>
		</div>
	);
}

function ItemNavigation({ numberOfItems }: { numberOfItems: number }) {
	const navigate = useNavigate();
	const itemIndex = Number(sessionStorage.getItem('itemIndex'));
	const chapterIndex = Number(sessionStorage.getItem('chapterIndex'));
	const chapters = JSON.parse(sessionStorage.getItem('chapters') || '[]');

	const handleClick = (forward: boolean) => {
		const newItemIndex = forward ? itemIndex + 1 : itemIndex - 1;
		sessionStorage.setItem('itemIndex', newItemIndex.toString());
		const objectId = chapters[chapterIndex].items[newItemIndex];
		navigate(`../item/${objectId}`);
	};

	return (
		<div>
			{itemIndex > 0 && (
				<button
					onClick={() => handleClick(false)}
					style={{ margin: '10px' }}
				>
					<ArrowBackIcon/>
					Previous Item
					
				</button>
			)}
			{itemIndex < numberOfItems - 1 && (
				<button
					onClick={() => handleClick(true)}
					style={{ margin: '10px' }}
				>
					Next Item
					<ArrowForwardIcon/>
				</button>
			)}
		</div>
	);
}

function ChapterNavigation({ numberOfChapters }: { numberOfChapters: number }) {
	const navigate = useNavigate();
	const chapterIndex = Number(sessionStorage.getItem('chapterIndex'));

	const handleClick = (forward: boolean) => {
		const newChapterIndex = forward ? chapterIndex + 1 : chapterIndex - 1;
		sessionStorage.setItem('chapterIndex', newChapterIndex.toString());
		sessionStorage.setItem('itemIndex', '0');
		navigate('/chapter');
	};

	return (
		<div className = 'chapter-buttons'>
			{chapterIndex > 0 && (
				<button
					onClick={() => handleClick(false)}
					className="bg-blue-500 text-white px-4 py-2 rounded"
				>
					<ArrowBackIcon/>
					Previous Chapter
				</button>
			)}
			{chapterIndex < numberOfChapters - 1 && (
				<button
					onClick={() => handleClick(true)}
					className="bg-blue-500 text-white px-4 py-2 rounded"
				>
					Next Chapter
					<ArrowForwardIcon/>
				</button>
			)}
		</div>
	);
}

export default ItemPage;
