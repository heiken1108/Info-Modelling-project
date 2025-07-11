import { useEffect, useState } from 'react';
import { Narrative } from '../lib/types';
import '../styling/CoverPage.css';

function CoverPage() {
	const [narrative, setNarratives] = useState<Narrative[]>([]);

	useEffect(() => {
		fetch('https://info-modelling-project.onrender.com/api/narrative')
			.then((res) => {
				if (!res.ok) {
					if (res.status === 404) {
						throw new Error('Narratives not found');
					}
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				return res.json();
			})
			.then((data) => {
				const dataNarratives: Narrative[] = data.map(
					(narrative: any) => ({
						_id: narrative._id,
						title: narrative.title,
						description: narrative.description,
						chapters: narrative.chapters.map((chapter: any) => ({
							title: chapter.title,
							introduction: chapter.introduction,
							items: chapter.items,
						})),
					})
				);
				setNarratives(dataNarratives);
			});
	});

	return (
		<>
			<div className="main-div">
				<h1>Nordic Bites</h1>
				<div className="introduction-container">
					<p>
						Welcome to Nordic Bites, an exhibition of different
						dishes and foods important to the Norwegian heritage,
						culture and everyday life. From traditional dishes such
						as Rakfish to modern interpretations of foreign food,
						such as the Norwegian taco , this exhibition will take
						you on a journey thought the norwegian way of living,
						giving you a taste of why norwegians are as they are.
					</p>
				</div>
				<h1>Choose a narrative</h1>
				{!narrative && <p>Loading narratives...</p>}
				{narrative && narrative.length > 0 && (
					<div>
						{narrative.map((narrative) => (
							<a
								href={`/narrative/${narrative._id}`}
								className="narrative-item"
							>
								{narrative.title}
							</a>
						))}
					</div>
				)}
			</div>
		</>
	);
}

export default CoverPage;
