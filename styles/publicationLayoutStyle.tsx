import { StyleSheet } from 'react-native';

export const publicationStyle = StyleSheet.create({
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
