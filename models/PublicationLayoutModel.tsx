/**
 * Publication model
 */
export namespace Publication {
	/**
	 * External user interface
	 */
	export interface UserResponse {
		id: number;
		name: string;
		company: CompanyResponse;
	}

	/**
	 * External post interface
	 */
	export interface PostResponse {
		id: number;
		userId: number;
		body: string;
		title: string;
	}

	/**
	 * External company interface
	 */
	export interface CompanyResponse {
		name: string;
		catchPhrase: string;
		bs: string;
	}

	/**
	 * External photo interface
	 */
	export interface PhotoResponse {
		id: number;
		albumId: number;
		thumbnailUrl: string;
	}

	/**
	 * Internal normalized post interface
	 */
	export interface Post {
		id: number;
		author: string;
		company: string;
		title: string;
		body: string;
		photoUrl: string;
	}
}
