import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cuisine } from '../lib/types';
import "../styling/CuisinePage.css"

function CuisinePage() {
	const { cuisineId } = useParams<{ cuisineId: string }>();
	const [cuisine, setCuisine] = useState<Cuisine | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!cuisineId || isNaN(Number(cuisineId))) {
			setError('Invalid cuisine ID');
			return;
		}

		fetch(`/api/cuisine/${cuisineId}`)
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
				const cuisine: Cuisine = {
					cuisineId: data.cuisineId,
					name: data.name,
					translation: data.translation,
					description: data.description,
					image_url: data.image_url,
					source_url: data.source_url,
					rating: data.rating,
				};
				setCuisine(cuisine);
			})
			.catch((err) => {
				console.error(err);
				setError(err.message);
			});
	}, [cuisineId]);

	const handleNewPageIndex = (forward: boolean): number => {
		if (forward) {
			return Number(cuisineId) + 1;
		} else {
			return Number(cuisineId) - 1;
		}
	};

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!cuisine) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<header>
				<a href="/">Back</a>
			</header>
			<div className= "container">
				<div className = "image">
				{cuisine.image_url && (
					<img src={cuisine.image_url} alt={cuisine.name}/>
				)}
				</div>
				<div className= "information">
				<h1>{cuisine.name}</h1>
				<p>
					Some information about {cuisine.name} ({cuisine.translation}):
				</p>
				<p>{cuisine.description}</p>
				
				<p>
					Source: <a href={cuisine.source_url}>{cuisine.source_url}</a>
				</p>
				</div>
			</div>
			<footer>
				<div>
					<a href={`/cuisine/${handleNewPageIndex(false)}`}>
						Previous
					</a>
					<a href={`/cuisine/${handleNewPageIndex(true)}`}>Next</a>
				</div>
			</footer>
		</div>
	);
}

export default CuisinePage;
