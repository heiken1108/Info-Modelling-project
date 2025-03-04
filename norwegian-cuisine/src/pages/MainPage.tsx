import { useEffect, useState } from 'react';
import { Cuisine } from '../lib/types';
import './MainPage.css'; // Import the CSS file

function MainPage() {
    const [cuisines, setCuisines] = useState<Cuisine[]>([]);

    useEffect(() => {
        fetch('/api/cuisine')
            .then((res) => {
                if (!res.ok) {
                    if (res.status === 404) {
                        throw new Error('Cuisine not found');
                    }
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                const dataCuisines: Cuisine[] = data.map((cuisine: any) => ({
                    cuisineId: cuisine.cuisineId,
                    name: cuisine.name,
                    translation: cuisine.translation,
                    description: cuisine.description,
                    image_url: cuisine.image_url,
                    source_url: cuisine.source_url,
                    rating: cuisine.rating,
                }));
                setCuisines(dataCuisines);
            });
    }, []);

    return (
        <>
            <h1>Velkommen til Norsk Mat</h1>
            <p>Her vil du finne oppskrifter på de beste norske rettene.</p>
            <p>Velg en kategori fra menyen til venstre for å begynne.</p>
            {cuisines && cuisines.length > 0 && (
                <ul className="cuisine-grid">
                    {cuisines.map((cuisine) => (
                        <li key={cuisine.cuisineId}>
                            <a href={`/cuisine/${cuisine.cuisineId}`}>
                                {cuisine.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default MainPage;