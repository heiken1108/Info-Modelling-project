//For description og Start narrative

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Narrative } from '../lib/types';

function NarrativePage() {
	const navigate = useNavigate();
	const { narrativeId } = useParams<{ narrativeId: string }>();
	const [narrative, setNarrative] = useState<Narrative>();

	const handleClick = (chapterNumber: number) => {
		sessionStorage.setItem('chapterIndex', chapterNumber.toString());
		sessionStorage.setItem('itemIndex', '0');
		navigate(`../../chapter`);
	};

	useEffect(() => {
		fetch(`/api/narrative/${narrativeId}`)
			.then((res) => {
				if (!res.ok) {
					if (res.status === 404) {
						throw new Error('Narrative not found');
					}
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				return res.json();
			})
			.then((data) => {
				const narrative: Narrative = {
					_id: data._id,
					title: data.title,
					description: data.description,
					chapters: data.chapters.map((chapter: any) => ({
						title: chapter.title,
						introduction: chapter.introduction,
						items: chapter.items,
					})),
				};

				setNarrative(narrative);

				// Store in sessionStorage
				sessionStorage.setItem(
					'chapters',
					JSON.stringify(data.chapters)
				);
				sessionStorage.setItem(
					'chapterItems',
					JSON.stringify(
						data.chapters.map((chapter: any) => chapter.items)
					)
				);
				sessionStorage.setItem('chapterIndex', '0');
				sessionStorage.setItem('itemIndex', '0');
			})
			.catch((error) =>
				console.error('Error fetching narrative:', error)
			);
	}, [narrativeId]);

	if (!narrative) {
		return <div>Loading...</div>;
	}
	console.log(sessionStorage.getItem('chapters'));
	console.log(sessionStorage.getItem('chapterItems'));

	return (
		<div className="narrative-page">
			<h1>Welcome to the Norwegian Cuisine Narrative</h1>
			<p>
				This narrative will take you through the rich and diverse
				culinary traditions of Norway.
			</p>
			<p>
				Explore the chapters to learn more about different aspects of
				Norwegian cuisine.
			</p>
			{narrative.chapters.map((chapter, index) => (
				<div key={index}>
					<h2>{chapter.title}</h2>
					<p>{chapter.introduction}</p>
					<button onClick={() => handleClick(index)}>
						Start Chapter
					</button>
				</div>
			))}
		</div>
	);
}

export default NarrativePage;
