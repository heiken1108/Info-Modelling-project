export interface Item {
	_id: string;
	name: string;
	translation: string;
	introductoryDescriptions: string[];
	averageDescriptions: string[];
	advancedDescriptions: string[];
	imageUrl: string;
	fileName: string;
	previousChapterPointer: string;
	nextChapterPointer: string;
	previousItemPointer: string;
	nextItemPointer: string;
	qrCode?: any;
	origin: string;
	flavorProfile: string;
	period: string;
}

export interface Narrative {
	_id: string;
	title: string;
	description: string;
	chapters: ChapterIntroduction[];
}

interface ChapterIntroduction {
	title: string;
	introduction: string;
	index: number;
}

export interface Chapter {
	title: string;
	introduction: string;
	previousChapterPointer: string;
	nextChapterPointer: string;
	previousItemPointer: string;
	nextItemPointer: string;
	items: string[];
}

export interface Room {
	roomId: number;
	items: Item[];
}

export interface Museum {
	rooms: Room[];
}
