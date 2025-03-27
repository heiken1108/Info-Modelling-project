import './Header.css';

function Header() {
	return (
		<header className="header">
			<div className="home-div">
				<a href="/">Home</a>
			</div>
			<nav className="navigation">
				<ul>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/description">Description</a>
					</li>
					<li>
						<a href="/disclaimer">Disclaimer</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
