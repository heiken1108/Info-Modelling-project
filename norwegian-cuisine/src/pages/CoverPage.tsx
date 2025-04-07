import { useEffect, useState } from 'react';
import { Narrative } from '../lib/types';

function CoverPage() {
	const [narrative, setNarratives] = useState<Narrative[]>([]);

	useEffect(() => {
		fetch('/api/narrative')
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
			<div>
				<h1>Cover</h1>
				<h1>Pick narrative</h1>
				{!narrative && <p>Loading narratives...</p>}
				{narrative && narrative.length > 0 && (
					<ul className="narrative-grid">
						{narrative.map((narrative) => (
							<li key={narrative._id}>
								<a href={`/narrative/${narrative._id}`}>
									{narrative.title}
								</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
}

export default CoverPage;
