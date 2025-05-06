const themes = ['viking', 'nature', 'nordic-style', 'scandi-minimal'];
import './ThemeSelector.css';

function ThemeSelector() {
	const setTheme = (theme: string) => {
		localStorage.setItem('theme', theme);
		window.location.reload();
	};

	const savedTheme = localStorage.getItem('theme') || 'viking';

	return (
		<div className="theme-selector">
			<h3>Theme:</h3>
			{themes.map((theme) => (
				<button
					key={theme}
					onClick={() => setTheme(theme)}
					className={`${
						theme === savedTheme
							? 'theme-button-disabled'
							: 'theme-button-enabled'
					}`}
					disabled={theme === savedTheme}
				>
					{theme}
				</button>
			))}
		</div>
	);
}

export default ThemeSelector;
