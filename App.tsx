import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginLayout from './components/LoginLayout';
import PublicationLayout from './components/PublicationLayout';
import { RootStackParamList } from './components/RootStackParams';

import 'react-native-gesture-handler';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Auth' component={LoginLayout} />
				<Stack.Screen name='PostsPage' component={PublicationLayout} />
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
