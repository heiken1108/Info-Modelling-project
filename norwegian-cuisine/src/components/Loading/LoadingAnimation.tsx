import './LoadingAnimation.css';

export default function LoadingAnimation() {
	return (
		<div className="loadingContainer">
			<div className="lds-default2">
				<div className="lds-default">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
}
