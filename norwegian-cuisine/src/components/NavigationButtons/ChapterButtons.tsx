import Button from './Button';

function ChapterButtons({
	previousPointer,
	nextPointer,
	restartChapter
}: {
	previousPointer: string | null;
	nextPointer: string | null;
	restartChapter: boolean;
}) {
	return (
		<div className="chapter-buttons">
			{previousPointer && (
				<Button
					path={previousPointer}
					forward={false}
					text={restartChapter ? 'Restart chapter': 'Previous chapter'}
				/>
			)}
			{nextPointer && (
				<Button
					path={nextPointer}
					forward={true}
					text={'Next chapter'}
				/>
			)}
		</div>
	);
}

export default ChapterButtons;
