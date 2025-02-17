import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CuisinePage from './pages/CuisinePage';
import MainPage from './pages/MainPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/cuisine/:cuisineId" element={<CuisinePage />} />
			</Routes>
		</Router>
	);
}

export default App;
