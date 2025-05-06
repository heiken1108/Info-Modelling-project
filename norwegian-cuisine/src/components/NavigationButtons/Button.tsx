import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

function Button({
	path,
	forward,
	text,
}: {
	path: string;
	forward: boolean;
	text: string;
}) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(path);
	};

	return (
		<button onClick={handleClick} className="nav-button">
			{forward ? (
				<>
					{text}
					<ArrowForwardIcon />
				</>
			) : (
				<>
					<ArrowBackIcon />
					{text}
				</>
			)}
		</button>
	);
}

export default Button;
