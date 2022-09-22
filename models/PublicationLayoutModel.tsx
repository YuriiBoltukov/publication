export namespace Publication {
	export interface UserResponse {
		id: number;
		name: string;
		company: CompanyResponse;
	}

	export interface PostResponse {
		id: number;
		userId: number;
		body: string;
		title: string;
	}

	export interface Post {
		id: number;
		author: string;
		company: string;
		title: string;
		body: string;
		photoUrl: string;
	}

	export interface CompanyResponse {
		name: string;
		catchPhrase: string;
		bs: string;
	}

	export interface PhotoResponse {
		id: number;
		albumId: number;
		thumbnailUrl: string;
	}
}
