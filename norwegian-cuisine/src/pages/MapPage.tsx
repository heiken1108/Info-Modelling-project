import { useNavigate } from 'react-router-dom';
import '../styling/MapPage.css';

interface Room {
	roomName: string;
	items: string[];
	url: string;
}

function MapPage() {
	const navigate = useNavigate();
	const handleClick = (url: string) => {
		navigate(`${url}`);
	};

	const rooms: Room[] = [
		{
			roomName: 'Hall of The Industrial Revolution',
			items: ['Brunost', 'Ribbe', 'Vafler'],
			url: '../narrative/67e539b42c27f289cb1a9cc0/chapter/3',
		},
		{
			roomName: 'Hall of the Early Modern Period',
			items: ['Pinnekjøtt', 'Smalahove', 'Finnbiff', 'Gløgg'],
			url: '../narrative/67e539b42c27f289cb1a9cc0/chapter/2',
		},
		{
			roomName: 'Hall of the Middle Ages',
			items: ['Fårikål', 'Røkelaks'],
			url: '../narrative/67e539b42c27f289cb1a9cc0/chapter/1',
		},
		{
			roomName: 'Hall of the Modern Era',
			items: ['Wienerpølse', 'Grandiosa', 'Taco'],
			url: '../narrative/67e539b42c27f289cb1a9cc0/chapter/4',
		},
		{
			roomName: 'Entrance',
			items: [],
			url: '../',
		},
		{
			roomName: 'Hall of the Viking Age',
			items: ['Tørrfisk', 'Rakfisk', 'Sursild'],
			url: '../narrative/67e539b42c27f289cb1a9cc0/chapter/0',
		},
	];

	return (
		<div className="main-div">
			<h1>Map of Nordic Bites</h1>
			<div className="map-div">
				<div className="museum-map">
					{rooms.map(({ roomName, items, url }) => (
						<div
							className="room"
							key={roomName}
							onClick={() => handleClick(url)}
							style={{ cursor: 'pointer' }}
						>
							<h3>{roomName}</h3>
							<ul>
								{items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default MapPage;
