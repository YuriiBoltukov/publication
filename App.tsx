import LoginLayout from './components/LoginLayout';
import PublicationLayout from './components/PublicationLayout';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import images from './assets/images';

const Stack = createNativeStackNavigator();

const fonts = () =>
	Font.loadAsync({
		inter: require('./assets/fonts/inter.ttf'),
	});

function App() {
	const [font, setFont] = useState(false);
	if (font) {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Auth'
						component={LoginLayout}
						options={{
							header: () => <Header />,
							headerBackButtonMenuEnabled: false,
						}}
					/>
					<Stack.Screen
						name='PostsPage'
						component={PublicationLayout}
						options={{
							header: props => <Header exit={images} {...props} />,
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	} else {
		return (
			<AppLoading
				startAsync={fonts}
				onFinish={() => setFont(true)}
				onError={console.warn}
			/>
		);
	}
}

export default App;
