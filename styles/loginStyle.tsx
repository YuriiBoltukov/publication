import { StyleSheet, ViewStyle } from 'react-native';

export interface Style {
	[key: string]: ViewStyle;
}

export const loginLayoutStyle = StyleSheet.create<Style>({
	inputView: {
		backgroundColor: '#D9D9D9',
		borderWidth: 4,
		borderColor: '#27569C',
		borderRadius: 10,
		width: 212,
		height: 45,
		marginBottom: 20,
		marginTop: 6,
	},
	TextInput: {
		height: 50,
		flex: 1,
		padding: 4,
	},

	loginBtn: {
		width: 212,
		borderRadius: 15,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		backgroundColor: '#E4B062',
	},
	title: {
		fontFamily: 'inter',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: 24,
		lineHeight: 29,
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		color: '#27569C',
	},
	inputField: {
		fontFamily: 'inter',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: 24,
		lineHeight: 29,
		display: 'flex',
		alignItems: 'center',
		color: '#000000',
	},
	btnText: {
		fontFamily: 'inter',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: 24,
		lineHeight: 29,
		display: 'flex',
		alignItems: 'center',
		color: '#000000',
	},
	inputWrapper: {
		width: 212,
	},
	titleContainer: {
		width: 440,
		height: 45,
		alignItems: 'center',
	},
});

export const loginStyleMobile = StyleSheet.create<Style>({
	inputContainer: {
		width: 290,
		flex: 4,
		backgroundColor: '#fff',
		borderWidth: 4,
		borderColor: '#27569C',
		borderRadius: 10,
		paddingTop: 8,
		paddingBottom: 32,
		paddingRight: 34,
		paddingLeft: 42,
		alignItems: 'center',
		margin: 15,
		shadowColor: '#000000',
		shadowOffset: { width: 4, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		alignSelf: 'center',
		justifyContent: 'space-around',
	},
});

export const loginStyleTablet = StyleSheet.create<Style>({
	inputContainer: {
		width: 290,
		height: 330,
		flex: 4,
		backgroundColor: '#fff',
		borderWidth: 4,
		borderColor: '#27569C',
		borderRadius: 10,
		paddingTop: 8,
		paddingBottom: 32,
		paddingRight: 34,
		paddingLeft: 42,
		alignItems: 'center',
		margin: 15,
		shadowColor: '#000000',
		shadowOffset: { width: 4, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
	},
});
