import Button from './Button';

function ItemButtons({
	previousPointer,
	nextPointer,
}: {
	previousPointer: string | null;
	nextPointer: string | null;
}) {
	return (
		<div className="nav-buttons">
			{previousPointer && (
				<Button
					path={previousPointer}
					forward={false}
					text={'Previous item'}
				/>
			)}
			<div style={{ flex: 1 }}></div>
			{nextPointer && (
				<Button path={nextPointer} forward={true} text={'Next item'} />
			)}
		</div>
	);
}

export default ItemButtons;
