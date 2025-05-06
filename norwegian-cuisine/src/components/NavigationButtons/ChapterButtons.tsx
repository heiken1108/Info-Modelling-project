import Button from './Button';
import './Button.css';

function ChapterButtons({
	previousPointer,
	nextPointer,
	restartChapter,
}: {
	previousPointer: string | null;
	nextPointer: string | null;
	restartChapter: boolean;
}) {
	return (
		<div className="nav-buttons top-nav-buttons">
			{previousPointer && (
				<Button
					path={previousPointer}
					forward={false}
					text={
						restartChapter ? 'Restart chapter' : 'Previous chapter'
					}
				/>
			)}
			<div style={{ flex: 1 }}></div>
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
