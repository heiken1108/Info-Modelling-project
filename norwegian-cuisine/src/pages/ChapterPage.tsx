import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Chapter } from '../lib/types';
import '../styling/ChapterPage.css';
import ChapterButtons from '../components/NavigationButtons/ChapterButtons';
import ItemButtons from '../components/NavigationButtons/ItemButtons';
import LoadingAnimation from '../components/Loading/LoadingAnimation';

function ChapterPage() {
	const { narrativeId, chapterIndex } = useParams<{
		narrativeId: string;
		chapterIndex: string;
	}>();
	const [chapter, setChapter] = useState<Chapter>();
	const [theme, setTheme] = useState<string>('nothing');
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'nothing';
		setTheme(savedTheme);
	}, []);

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
	}, [chapterIndex]);

	if (!chapter) {
		return <LoadingAnimation />;
	}

	return (
		<div className={`main-div theme-${theme}`}>
			<div className="chapter-div">
				<h3>{chapter.title}</h3>
				<div className="chapter-description-div">
					{chapter.introduction}
				</div>
				<div>
					<ChapterButtons
						previousPointer={chapter.previousChapterPointer}
						nextPointer={chapter.nextChapterPointer}
						restartChapter={false}
					/>
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
