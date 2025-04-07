import { useNavigate } from 'react-router-dom';

function ChapterPage() {
	const chapterIndex = Number(sessionStorage.getItem('chapterIndex'));
	const chapterIntroductions = JSON.parse(
		sessionStorage.getItem('chapters') || '[]'
	);
	return (
		<div>
			<h1>Chapter Page</h1>
			<p>This is the chapter page.</p>
			{chapterIntroductions[chapterIndex].title}
			<p>{chapterIntroductions[chapterIndex].introduction}</p>
			<ChapterNavigation numberOfChapters={chapterIntroductions.length} />
			<ItemNavigation
				numberOfItems={chapterIntroductions[chapterIndex].items.length}
			/>
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
		navigate(0);
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

function ItemNavigation({ numberOfItems }: { numberOfItems: number }) {
	const navigate = useNavigate();
	const itemIndex = Number(sessionStorage.getItem('itemIndex'));
	const chapterIndex = Number(sessionStorage.getItem('chapterIndex'));
	const chapters = JSON.parse(sessionStorage.getItem('chapters') || '[]');

	const handleClick = (forward: boolean) => {
		if (forward) {
			const newItemIndex = 0;
			const objectId = chapters[chapterIndex].items[newItemIndex];
			navigate(`../item/${objectId}`);
		} else {
			const newChapterIndex = chapterIndex - 1;
			sessionStorage.setItem('chapterIndex', newChapterIndex.toString());
			const newItemIndex = chapters[newChapterIndex].items.length - 1;
			sessionStorage.setItem('itemIndex', newItemIndex.toString());
			const objectId = chapters[newChapterIndex].items[newItemIndex];
			navigate(`../item/${objectId}`);
		}
	};

	return (
		<div className="flex justify-between">
			{chapterIndex > 0 && (
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

export default ChapterPage;
