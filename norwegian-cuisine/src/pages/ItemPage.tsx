import { useNavigate, useParams } from 'react-router-dom';
import { Item } from '../lib/types';
import { useEffect, useState } from 'react';

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
			<h1>Item Page</h1>
			<p>This is the item page.</p>
			<p>Item ID: {itemId}</p>
			<p>{item.name}</p>
			<ChapterNavigation numberOfChapters={chapterIntroductions.length} />
			<ItemNavigation
				numberOfItems={chapterIntroductions[chapterIndex].items.length}
			/>
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
		<div className="flex justify-between">
			{itemIndex > 0 && (
				<button
					onClick={() => handleClick(false)}
					className="bg-blue-500 text-white px-4 py-2 rounded"
				>
					Previous Item
				</button>
			)}
			{itemIndex < numberOfItems - 1 && (
				<button
					onClick={() => handleClick(true)}
					className="bg-blue-500 text-white px-4 py-2 rounded"
				>
					Next Item
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
		<div className="flex justify-between">
			{chapterIndex > 0 && (
				<button
					onClick={() => handleClick(false)}
					className="bg-blue-500 text-white px-4 py-2 rounded"
				>
					Previous Chapter
				</button>
			)}
			{chapterIndex < numberOfChapters - 1 && (
				<button
					onClick={() => handleClick(true)}
					className="bg-blue-500 text-white px-4 py-2 rounded"
				>
					Next Chapter
				</button>
			)}
		</div>
	);
}

export default ItemPage;
