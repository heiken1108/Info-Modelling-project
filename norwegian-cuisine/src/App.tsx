import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CuisinePage from './pages/CuisinePage';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import DescriptionPage from './pages/DescriptionPage';
import DisclaimerPage from './pages/DisclaimerPage';
import Header from './components/Header/Header';

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route
						path="/cuisine/:cuisineId"
						element={<CuisinePage />}
					/>
					<Route path="/about" element={<AboutPage />} />
					<Route path="/description" element={<DescriptionPage />} />
					<Route path="/disclaimer" element={<DisclaimerPage />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
