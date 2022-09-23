import { View, Image } from 'react-native';
import { headerStyle } from '../styles/headerStyle';
import { TouchableOpacity } from 'react-native';

export default function Header(props?: any) {
	const logo = (
		<View style={headerStyle.header}>
			<Image style={headerStyle.img} source={require('../assets/logo-1.png')} />
		</View>
	);

	const exitbtn = (
		<View style={headerStyle.header}>
			<Image style={headerStyle.img} source={require('../assets/logo-1.png')} />
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate('Auth');
				}}>
				<Image style={headerStyle.exitBtn} source={props?.exit?.exitImg} />
			</TouchableOpacity>
		</View>
	);

	return <View>{props.exit ? exitbtn : logo}</View>;
}
