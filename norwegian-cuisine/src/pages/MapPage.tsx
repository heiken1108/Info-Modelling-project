import '../styling/MapPage.css';

interface Room {
	roomName: string;
	items: string[];
}

function MapPage() {
	const rooms: Room[] = [
		{
			roomName: 'Hall of The Industrial Revolution',
			items: ['Brunost', 'Ribbe', 'Vafler'],
		},
		{
			roomName: 'Hall of the Early Modern Period',
			items: ['Pinnekjøtt', 'Smalahove', 'Finnbiff', 'Gløgg'],
		},
		{
			roomName: 'Hall of the Middle Ages',
			items: ['Fårikål', 'Røkelaks'],
		},
		{
			roomName: 'Hall of the Modern Era',
			items: ['Wienerpølse', 'Grandiosa', 'Taco'],
		},
		{
			roomName: 'Entrance',
			items: [],
		},
		{
			roomName: 'Hall of the Viking Age',
			items: ['Tørrfisk', 'Rakfisk', 'Sursild'],
		},
	];

	return (
		<div className="main-div">
			<div className="map-div">
				<div className="museum-map">
					{rooms.map(({ roomName, items }) => (
						<div className="room" key={roomName}>
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
