import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { loginLayoutStyle } from '../styles/loginLayoutStyle';

export default function LoginLayout({ navigation }: any) {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [visible, setVisible] = React.useState(false);
	const isMobile: boolean = window.innerWidth <= 510;

	/**
	 * Function for toggling snack bar
	 */
	function onToggleSnackBar(): void {
		setVisible(!visible);
	}

	/**
	 * Function for setting invisible to snack bar
	 */
	function onDismissSnackBar(): void {
		setVisible(false);
	}

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
	function validate(login: string, password: string): void {
		const user = 'admin';
		const userPassword = 'admin';

		if (login === user && password === userPassword) {
			navigation.navigate('PostsPage');
		} else {
			onToggleSnackBar();
		}
	}

	return (
		<View style={loginLayoutStyle.inputContainer}>
			<View style={loginLayoutStyle.titleContainer}>
				<Text style={loginLayoutStyle.title}>Autorization</Text>
			</View>
			<View style={loginLayoutStyle.inputWrapper}>
				<Text style={loginLayoutStyle.inputField}>login</Text>
				<View style={loginLayoutStyle.inputView}>
					<TextInput
						underlineColorAndroid={'transparent'}
						autoCapitalize='none'
						style={loginLayoutStyle.TextInput}
						placeholderTextColor='#003f5c'
						onChangeText={login => setLogin(login)}
					/>
				</View>
			</View>
			<View style={loginLayoutStyle.inputWrapper}>
				<Text style={loginLayoutStyle.inputField}>password</Text>
				<View style={loginLayoutStyle.inputView}>
					<TextInput
						underlineColorAndroid={'transparent'}
						autoCapitalize='none'
						style={loginLayoutStyle.TextInput}
						placeholderTextColor='#003f5c'
						secureTextEntry={true}
						onChangeText={password => setPassword(password)}
					/>
				</View>
			</View>
			<TouchableOpacity
				style={loginLayoutStyle.loginBtn}
				onPress={() => {
					onSubmit(password, login);
				}}>
				<Text style={loginLayoutStyle.btnText}>Submit</Text>
			</TouchableOpacity>
			<Snackbar
				visible={visible}
				onDismiss={onDismissSnackBar}
				duration={3000}
				action={{
					label: 'Error',
					onPress: () => {},
				}}>
				Username or password entered incorrectly
			</Snackbar>
		</View>
	);
}
