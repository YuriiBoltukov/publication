import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { Publication } from './PublicationLayout.model';

// @ts-ignore
export default function PublicationLayout() {
	const [posts, setPosts] = useState<Publication.Post[]>([]);

	/**
	 * For getting posts from server and setting into state
	 */
	async function fetchData(): Promise<void> {
		const posts: Publication.Post[] = await Promise.all([
			fetchByRoute<Publication.UserResponse[]>('users'),
			fetchByRoute<Publication.PostResponse[]>('posts'),
			fetchByRoute<Publication.PhotoResponse[]>('photos'),
		]).then(
			([users, posts, photos]: [
				Publication.UserResponse[],
				Publication.PostResponse[],
				Publication.PhotoResponse[]
			]): Publication.Post[] => {
				return users
					.map((user: Publication.UserResponse): Publication.Post | null => {
						return preparePost(user, posts, photos);
					})
					.filter(Boolean) as Publication.Post[];
			}
		);

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
		 * @param {Publication.UserResponse} user
		 * @param {Publication.PostResponse[]} posts
		 * @param {Publication.PhotoResponse[]} photos
		 * @returns {Publication.Post | null}
		 */
		function preparePost(
			user: Publication.UserResponse,
			posts: Publication.PostResponse[],
			photos: Publication.PhotoResponse[]
		): Publication.Post | null {
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
		borderColor: '#27569C',
		borderRadius: 6,
		borderWidth: 5,
		shadowColor: '#000000',
		shadowOffset: { width: 4, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
	},
});
