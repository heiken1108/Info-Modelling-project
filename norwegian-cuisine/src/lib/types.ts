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
	_id: string;
	itemId: number;
	name: string;
	translation: string;
	introductoryDescriptions: string[];
	averageDescriptions: string[];
	AdvancedDescriptions: string[];
	imageUrl: string;
	qrCode?: any;
}

export interface Narrative {
	_id: string;
	title: string;
	description: string;
	chapters: Chapter[];
}

export interface Chapter {
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
