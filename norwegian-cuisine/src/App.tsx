import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import DisclaimerPage from './pages/DisclaimerPage';
import Header from './components/Header/Header';
import NarrativePage from './pages/NarrativePage';
import CoverPage from './pages/CoverPage';
import ChapterPage from './pages/ChapterPage';
import ItemPage from './pages/ItemPage';
import DocumentationPage from './pages/DocumentationPage';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';

function App() {
	return (
		<Router>
			<Header />
			<main>
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
					<Route path="/disclaimer" element={<DisclaimerPage />} />
					<Route
						path="/documentation"
						element={<DocumentationPage />}
					/>
				</Routes>
				<ThemeSelector />
			</main>
		</Router>
	);
}

export default App;
