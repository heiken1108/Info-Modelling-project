import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';

// Lazy load all page components. Nå blir likevel css-en med videre om man navigere fra en side til en annen
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const DisclaimerPage = React.lazy(() => import('./pages/DisclaimerPage'));
const NarrativePage = React.lazy(() => import('./pages/NarrativePage'));
const CoverPage = React.lazy(() => import('./pages/CoverPage'));
const ChapterPage = React.lazy(() => import('./pages/ChapterPage'));
const ItemPage = React.lazy(() => import('./pages/ItemPage'));
const DocumentationPage = React.lazy(() => import('./pages/DocumentationPage'));
const MapPage = React.lazy(() => import('./pages/MapPage'));

// Loading fallback component
const LoadingFallback = () => <div className="loading">Loading...</div>;

function App() {
	return (
		<Router>
			<div id="root">
				<Header />
				<main>
					<Suspense fallback={<LoadingFallback />}>
						<Routes>
							<Route path="/" element={<CoverPage />} />
							<Route
								path="/narrative/:narrativeId"
								element={<NarrativePage />}
							/>
							<Route
								path="/narrative/:narrativeId/chapter/:chapterIndex"
								element={<ChapterPage />}
							/>
							<Route
								path="/narrative/:narrativeId/chapter/:chapterIndex/item/:itemId"
								element={<ItemPage />}
							/>
							<Route path="/chapter" element={<ChapterPage />} />
							<Route path="/about" element={<AboutPage />} />
							<Route
								path="/disclaimer"
								element={<DisclaimerPage />}
							/>
							<Route
								path="/documentation"
								element={<DocumentationPage />}
							/>
							<Route path="/map" element={<MapPage />} />
						</Routes>
					</Suspense>
				</main>
				<div className="theme-selector-div">
					<ThemeSelector />
				</div>
			</div>
		</Router>
	);
}

export default App;
