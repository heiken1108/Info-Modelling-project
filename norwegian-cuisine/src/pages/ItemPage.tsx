import { useParams } from 'react-router-dom';
import { Item } from '../lib/types';
import { useEffect, useState } from 'react';
import '../styling/itemPage.css';

import ChapterButtons from '../components/NavigationButtons/ChapterButtons';
import ItemButtons from '../components/NavigationButtons/ItemButtons';
import getImageByFileName from '../utils/imageLoader';



function ItemPage() {
	const { narrativeId, chapterIndex, itemId } = useParams<{
		narrativeId: string;
		chapterIndex: string;
		itemId: string;
	}>();
	const [item, setItem] = useState<Item>();

	useEffect(() => {
		fetch(
			`/api/narrative/${narrativeId}/chapter/${chapterIndex}/item/${itemId}`
		)
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
					fileName: data.fileName,
					previousChapterPointer: data.previousChapterPointer,
					nextChapterPointer: data.nextChapterPointer,
					previousItemPointer: data.previousItemPointer,
					nextItemPointer: data.nextItemPointer,
					qrCode: null,
				};
				setItem(item);
			});
	});

	if (!item) {
		return <div>Loading item...</div>;
	}
	const imageSrc = getImageByFileName(item.fileName);
	console.log('hellooooooooooo')
	console.log('imageSrc:', imageSrc);


	return (
		<div>
			<div>
				<div className="nav-buttons">
					<ChapterButtons
						previousPointer={item.previousChapterPointer}
						nextPointer={item.nextChapterPointer}
						restartChapter={true}
					/>
				</div>
				<h1 style={{ textAlign: 'center' }}>{item.name}</h1>
				<div className="item-container">
				<img src={imageSrc} alt={item.name} />
					<div className="information-container">
						<p>This is the item page.</p>
						<p>Item ID: {itemId}</p>
						<p>Item Name: {item.name}</p>
						<p>Item Translation: {item.translation}</p>
						<p>Item File Name: {item.fileName}</p>
					</div>
				</div>
				<div className="nav-buttons">
					<ItemButtons
						previousPointer={item.previousItemPointer}
						nextPointer={item.nextItemPointer}
					/>
				</div>
			</div>
		</div>
	);
}

export default ItemPage;
