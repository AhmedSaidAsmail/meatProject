import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Main} from '../styles/';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            app_token: null,
        };
    }

    componentDidMount() {
        this._setAppTokenToState();
        if (!this.state.app_token) {
            this._navigate('Home');
        } else {
            this._navigate('Login');
        }
    }

    _setAppTokenToState() {
        // const token = await AsyncStorage.getItem('app_token');
        // return token !== null;

        AsyncStorage.multiGet(['app_token'])
            .then(data => {
                this.setState({app_token: data[0][1]});
            });
    }

    _navigate(screen) {
        const {navigate} = this.props.navigation;
        setTimeout(() => navigate(screen), 2000);
    }

    render() {
        return (
            <View style={Main.container}>
                <ActivityIndicator size="large"/>
                <Text style={Main.welcomeHeader}>لحوم</Text>
                <Image
                    style={{width: 251, height: 120, resizeMode: 'contain'}}
                    source={{uri: 'https://souvenirsharm.com/meatProject/meat1.png'}}
                />
            </View>
        );
    }
}
