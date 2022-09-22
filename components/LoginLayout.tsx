import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

export default function LoginLayout() {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	function OnSubmit(login: string, password: string) {
		validate(login, password);
	}

	function validate(login: string, password: string) {
		const navigation = useNavigation<authScreenProp>();
		const user = 'admin';
		const userPassword = 'admin';
		if (login === user && password === userPassword) {
			navigation.navigate('PostsPage');
		} else {
			alert('Username or password entered incorrectly');
		}
	}
	return (
		<View>
			<Header />

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
					onPress={() => {
						OnSubmit(password, login);
					}}
					style={styles.loginBtn}>
					<Text style={styles.btnText}>Submit</Text>
				</TouchableOpacity>
			</View>
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
