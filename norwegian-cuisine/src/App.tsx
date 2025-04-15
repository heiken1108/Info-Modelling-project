import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import DescriptionPage from './pages/DescriptionPage';
import DisclaimerPage from './pages/DisclaimerPage';
import Header from './components/Header/Header';
import NarrativePage from './pages/NarrativePage';
import CoverPage from './pages/CoverPage';
import ChapterPage from './pages/ChapterPage';
import ItemPage from './pages/ItemPage';

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
					<Route path="/item/:itemId" element={<ItemPage />} />
					<Route path="/chapter" element={<ChapterPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/description" element={<DescriptionPage />} />
					<Route path="/disclaimer" element={<DisclaimerPage />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
