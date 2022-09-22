import { StyleSheet } from 'react-native';
import LoginLayout from './components/LoginLayout';
import PublicationLayout from './components/PublicationLayout';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import images from './assets/images';

const Stack = createNativeStackNavigator();

function App() {
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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
