import { StyleSheet } from 'react-native';
import LoginLayout from './components/LoginLayout';
import PublicationLayout from './components/PublicationLayout';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Auth' component={LoginLayout} />
				<Stack.Screen name='PostsPage' component={PublicationLayout} />
			</Stack.Navigator>
		</NavigationContainer>
		/* 	<>
			<Stack.Navigator>
				<Stack.Screen name='Auth' component={LoginLayout} />
			</Stack.Navigator>

			<View>
				<LoginLayout />
			</View>
		</> */
		//<Stack.Navigator>
		// <Stack.Screen name='Auth' component={LoginLayout} />
		// <Stack.Screen name='PostsPage' component={PublicationLayout} />

		//</Stack.Navigator>
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
