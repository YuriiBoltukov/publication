import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import images from '../assets/images';
import { Card, Paragraph } from 'react-native-paper';
interface UserResponse {
	id: number;
	name: string;
	company: CompanyResponse;
}

interface PostResponse {
	id: number;
	userId: number;
	body: string;
	title: string;
}

interface Post {
	id: number;
	author: string;
	company: string;
	title: string;
	body: string;
	photoUrl: string;
}

interface CompanyResponse {
	name: string;
	catchPhrase: string;
	bs: string;
}

interface PhotoResponse {
	id: number;
	albumId: number;
	thumbnailUrl: string;
}

// @ts-ignore
export default function PublicationLayout({ navigation }) {
	const [posts, setPosts] = useState<Post[]>([]);

	function logOut() {
		navigation.goBack();
	}

	/**
	 * For getting posts from server and setting into state
	 */
	async function fetchData(): Promise<void> {
		const posts: Post[] = await Promise.all([
			fetchByRoute<UserResponse[]>('users'),
			fetchByRoute<PostResponse[]>('posts'),
			fetchByRoute<PhotoResponse[]>('photos'),
		]).then(
			([users, posts, photos]: [
				UserResponse[],
				PostResponse[],
				PhotoResponse[]
			]): Post[] => {
				return users
					.map((user: UserResponse): Post | null => {
						return preparePost(user, posts, photos);
					})
					.filter(Boolean) as Post[];
			}
		);
		console.log(posts);
		setPosts(prevPosts => posts);

		/**
		 * For requesting data from server
		 * @param {string} route
		 * @returns {Promise<T>}
		 */
		function fetchByRoute<T>(route: string): Promise<T> {
			return fetch(`https://jsonplaceholder.typicode.com/${route}`).then(
				response => response.json()
			);
		}

		/**
		 * For preparing post to match Post interface
		 * @param {UserResponse} user
		 * @param {PostResponse[]} posts
		 * @param {PhotoResponse[]} photos
		 * @returns {Post | null}
		 */
		function preparePost(
			user: UserResponse,
			posts: PostResponse[],
			photos: PhotoResponse[]
		): Post | null {
			const post = posts.find(el => user?.id === el?.userId);
			const photo = photos.find(el => user?.id === el?.albumId);

			if (!post || !photo) {
				return null;
			}

			return {
				id: user?.id,
				author: user?.name,
				company: user.company?.name,
				title: post?.title,
				body: post?.body,
				photoUrl: photo?.thumbnailUrl,
			};
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<View style={styles.publicationContainer}>
			<Header exit={images} logout={logOut} />

			<ScrollView>
				{posts.length ? (
					posts.map(post => {
						return (
							<Card style={styles.cardContainer} key={post.id}>
								<Card.Title title={post.author} subtitle={post.company} />
								<Card.Content>
									<Paragraph>{post.title}</Paragraph>
								</Card.Content>
							</Card>
						);
					})
				) : (
					<Paragraph>'Your posts are loading...'</Paragraph>
				)}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	publicationContainer: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
	cardContainer: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: 16,
		lineHeight: 19,
		color: '#000000',
		marginTop: 10,
		marginRight: 15,
		marginBottom: 10,
		marginLeft: 13,
	},
});
