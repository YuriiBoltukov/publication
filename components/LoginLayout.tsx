import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Snackbar } from 'react-native-paper';
import {
	loginLayoutStyle,
	loginStyleMobile,
	loginStyleTablet,
	Style,
} from '../styles/loginStyle';

export default function LoginLayout({ navigation }: any) {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [visible, setVisible] = useState(false);
	const [width, setWidth] = useState({ width: window.innerWidth });

	/**
	 * Function for checking device width
	 * @returns boolean
	 */
	function isMobile(): boolean {
		return width.width <= 480;
	}

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

	/**
	 * Function for defining style object by device type
	 * @returns {Style}
	 */
	function getStyle(): Style {
		return isMobile() ? loginStyleMobile : loginStyleTablet;
	}

	useEffect(() => {
		setWidth({ width: window.innerWidth });
	});

	return (
		<View>
			<View style={getStyle().inputContainer}>
				<View style={loginLayoutStyle.titleContainer}>
					<Text style={loginLayoutStyle.title}>Autorization</Text>
				</View>
				<View style={[loginLayoutStyle.inputWrapper, getStyle()]}>
					<Text style={[loginLayoutStyle.inputField, getStyle()]}>login</Text>
					<View style={[loginLayoutStyle.inputView, getStyle()]}>
						<TextInput
							underlineColorAndroid={'transparent'}
							autoCapitalize='none'
							style={loginLayoutStyle.TextInput}
							placeholderTextColor='#003f5c'
							onChangeText={login => setLogin(login)}
						/>
					</View>
				</View>
				<View style={[loginLayoutStyle.inputWrapper, getStyle()]}>
					<Text style={[loginLayoutStyle.inputField, getStyle()]}>
						password
					</Text>
					<View style={[loginLayoutStyle.inputView, getStyle()]}>
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
					style={[loginLayoutStyle.loginBtn, getStyle()]}
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
		</View>
	);
}
