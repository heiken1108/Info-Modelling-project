export interface Cuisine {
	cuisineId: number;
	name: string;
	translation: string;
	description: string;
	image_url: string;
	source_url: string;
	rating: number;
}

export interface Item {
	itemId: number;
	name: string;
	shortDescription: string;
	mediumDescription: string;
	longDescription: string;
	image_url: string;
	qrCode?: any;
}

export interface Narrative {
	narrativeId: number;
	title: string;
	description: string;
	chapters: Chapter[];
}

export interface Chapter {
	chapterId: number;
	title: string;
	introduction: string;
	items: Item[];
}

export interface Room {
	roomId: number;
	items: Item[];
}

export interface Museum {
	rooms: Room[];
}
