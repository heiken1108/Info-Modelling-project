import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Narrative } from '../lib/types';
import '../styling/NarrativePage.css';

function NarrativePage() {
	const navigate = useNavigate();
	const { narrativeId } = useParams<{ narrativeId: string }>();
	const [narrative, setNarrative] = useState<Narrative>();

	const handleClick = (chapterNumber: number) => {
		navigate(`./chapter/${chapterNumber}`);
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
			})
			.catch((error) =>
				console.error('Error fetching narrative:', error)
			);
	}, [narrativeId]);

	if (!narrative) {
		return <div>Loading...</div>;
	}

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
			{narrative.chapters && (
  				<div className="chapter-containers">
  				  {narrative.chapters.map((chapter, index) => (
      				<div key={index}>
      				  <h2>{chapter.title}</h2>
      				  <button onClick={() => handleClick(index)}>Learn More</button>
      				</div>
			))}
  		</div>
		)}
		</div>
	);
}

export default NarrativePage;
