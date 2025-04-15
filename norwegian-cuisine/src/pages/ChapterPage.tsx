import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Chapter } from '../lib/types';
import ChapterButtons from '../components/NavigationButtons/ChapterButtons';
import ItemButtons from '../components/NavigationButtons/ItemButtons';
import '../styling/itemPage.css';

function ChapterPage() {
	const { narrativeId, chapterIndex } = useParams<{
		narrativeId: string;
		chapterIndex: string;
	}>();
	const [chapter, setChapter] = useState<Chapter>();

	useEffect(() => {
		fetch(`/api/narrative/${narrativeId}/chapter/${chapterIndex}`)
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
				const chapter: Chapter = {
					title: data.title,
					introduction: data.introduction,
					previousChapterPointer: data.previousChapterPointer,
					nextChapterPointer: data.nextChapterPointer,
					previousItemPointer: data.previousItemPointer,
					nextItemPointer: data.nextItemPointer,
					items: data.items,
				};
				setChapter(chapter);
			});
	});

	if (!chapter) {
		return <div>Loading chapter...</div>;
	}

	return (
		<div>
			<div>
				<div className="nav-buttons">
					<ChapterButtons
						previousPointer={chapter.previousChapterPointer}
						nextPointer={chapter.nextChapterPointer}
						restartChapter={false}
					/>
				</div>
				<h1 style={{ textAlign: 'center' }}>{chapter.title}</h1>
				<div className="item-container">
					<div className="information-container">
						<p>This is the chapter page.</p>
						<p>Chapter title: {chapter.title}</p>
						<p>Chapter introduction: {chapter.introduction}</p>
					</div>
				</div>
				<div className="nav-buttons">
					<ItemButtons
						previousPointer={chapter.previousItemPointer}
						nextPointer={chapter.nextItemPointer}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChapterPage;
