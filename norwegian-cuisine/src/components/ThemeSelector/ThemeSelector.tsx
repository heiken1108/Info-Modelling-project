const themes = ['viking', 'nature', 'nordic-style', 'scandi-minimal'];

function ThemeSelector() {
	const setTheme = (theme: string) => {
		localStorage.setItem('theme', theme);
		window.location.reload();
	};

	return (
		<div className="theme-selector">
			{themes.map((theme) => (
				<button key={theme} onClick={() => setTheme(theme)}>
					{theme}
				</button>
			))}
		</div>
	);
}

export default ThemeSelector;
