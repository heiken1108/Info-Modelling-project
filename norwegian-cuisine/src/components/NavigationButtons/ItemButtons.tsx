import Button from './Button';

function ItemButtons({
	previousPointer,
	nextPointer,
}: {
	previousPointer: string | null;
	nextPointer: string | null;
}) {
	return (
		<div>
			{previousPointer && (
				<Button
					path={previousPointer}
					forward={false}
					text={'Previous item'}
				/>
			)}
			{nextPointer && (
				<Button path={nextPointer} forward={true} text={'Next item'} />
			)}
		</div>
	);
}

export default ItemButtons;
