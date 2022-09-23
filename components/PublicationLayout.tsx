import React, { useEffect, useState } from 'react';
import { ScrollView, Image } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { Publication } from '../models/publicationLayoutModel';
import { publicationStyle } from '../styles/publicationLayoutStyle';
import { ProgressBar, MD3Colors, List } from 'react-native-paper';

export default function PublicationLayout() {
	const [posts, setPosts] = useState<Publication.Post[]>([]);
	const [width, setWidth] = useState({ width: window.innerWidth });

	/**
	 * For checking device width
	 * @returns boolean
	 */
	function isMobile(): boolean {
		return width.width <= 670;
	}

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
		async function fetchByRoute<T>(route: string): Promise<T> {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/${route}`
			);
			return await response.json();
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

	useEffect((): void => {
		fetchData();
		setWidth({ width: window.innerWidth });
	}, []);

	return (
		<ScrollView>
			<List.Section style={publicationStyle.container}>
				{posts.length ? (
					isMobile() ? (
						posts.map(post => {
							return (
								<Card style={publicationStyle.cardContainer} key={post.id}>
									<Card.Title
										titleStyle={publicationStyle.content}
										subtitleStyle={publicationStyle.content}
										title={post.author}
										subtitle={post.company}
									/>
									<Card.Content>
										<Paragraph style={publicationStyle.content}>
											{post.title}
										</Paragraph>
									</Card.Content>
								</Card>
							);
						})
					) : (
						posts.map(post => {
							return (
								<Card style={publicationStyle.cardContainer} key={post.id}>
									<Card.Content>
										<Image
											source={{ height: 150, width: 150, uri: post.photoUrl }}
											accessibilityLabel={post.title}
										/>
									</Card.Content>
									<Card.Title
										titleStyle={publicationStyle.content}
										subtitleStyle={publicationStyle.content}
										title={post.author}
										subtitle={post.company}
									/>
									<Card.Content>
										<Paragraph style={publicationStyle.content}>
											{post.title}
										</Paragraph>
									</Card.Content>
									<Card.Content>
										<Paragraph style={publicationStyle.content}>
											{post.body}
										</Paragraph>
									</Card.Content>
								</Card>
							);
						})
					)
				) : (
					<>
						<ProgressBar indeterminate color={MD3Colors.secondary50} />
						<Paragraph>'Your posts are loading...'</Paragraph>
					</>
				)}
			</List.Section>
		</ScrollView>
	);
}
