import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

// @ts-ignore
export default function LoginLayout({ navigation }) {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	/**
	 * Function for submitting form data
	 * @param {string} login
	 * @param {string} password
	 */
	function onSubmit(login: string, password: string): void {
		validate(login, password);
	}

	/**
	 * Function for validating form data
	 * @param {string} login
	 * @param {string} password
	 */
	function validate(login: string, password: string) {
		const user = '';
		const userPassword = '';

		if (login === user && password === userPassword) {
			navigation.navigate('PostsPage');
		} else {
			alert('Username or password entered incorrectly');
		}
	}

	return (
		<View style={styles.inputContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Autorization</Text>
			</View>
			<View style={styles.inputWrapper}>
				<Text style={styles.inputField}>login</Text>
				<View style={styles.inputView}>
					<TextInput
						underlineColorAndroid={'transparent'}
						autoCapitalize='none'
						style={styles.TextInput}
						placeholderTextColor='#003f5c'
						onChangeText={login => setLogin(login)}
					/>
				</View>
			</View>
			<View style={styles.inputWrapper}>
				<Text style={styles.inputField}>password</Text>
				<View style={styles.inputView}>
					<TextInput
						underlineColorAndroid={'transparent'}
						autoCapitalize='none'
						style={styles.TextInput}
						placeholderTextColor='#003f5c'
						secureTextEntry={true}
						onChangeText={password => setPassword(password)}
					/>
				</View>
			</View>
			<TouchableOpacity
				style={styles.loginBtn}
				onPress={() => {
					onSubmit(password, login);
				}}>
				<Text style={styles.btnText}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
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
		focus: {
			outline: 'none',
		},
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
		fontFamily: 'Inter',
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
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: 24,
		lineHeight: 29,
		display: 'flex',
		alignItems: 'center',
		color: '#000000',
	},
	btnText: {
		fontFamily: 'Inter',
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
		width: 212,
		height: 45,
		alignItems: 'center',
	},
});
