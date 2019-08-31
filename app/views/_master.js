import React from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Master} from '../styles';

export default class MasterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            app_token: null,
            activePage: null,
            title: null,
        };
    }

    componentDidMount() {
        this._setInitialCredentials();

    }

    _bodyContent() {
    }

    _setInitialCredentials() {
        AsyncStorage.multiGet(['app_token', 'email'])
            .then(data => {
                this.setState({
                    email: data[1][1],
                    app_token: data[0][1],
                });
            });
    }

    _footerPartStyle(style, pageName) {
        let styles = [style];
        if (this.state.activePage === pageName) {
            styles.push(Master.footerPartActive);
            return styles;
        }
        return style;
    }

    render() {
        return (
            <View style={Master.container}>
                <View style={Master.headerArea}>
                    <Text style={Master.headerTitle}>{this.state.title}</Text>
                </View>
                <View style={Master.body}>
                        {this._bodyContent()}
                </View>
                <View style={Master.footer}>
                    <View style={Master.footerPart}>
                        <Icon name='home' style={this._footerPartStyle(Master.footerPartIcon, 'home')}/>
                        <Text style={this._footerPartStyle(Master.footerPartText, 'home')}>الرئيسية</Text>
                    </View>
                    <View style={Master.footerPart}>
                        <Icon name='shopping-cart' style={this._footerPartStyle(Master.footerPartIcon, 'cart')}/>
                        <Text style={this._footerPartStyle(Master.footerPartText, 'cart')}>مشترياتي</Text>
                    </View>
                    <View style={Master.footerPart}>
                        <Icon name='user' style={this._footerPartStyle(Master.footerPartIcon, 'profile')}/>
                        <Text style={this._footerPartStyle(Master.footerPartText, 'profile')}>صفحتي</Text>
                    </View>
                    <View style={Master.footerPart}>
                        <Icon name='question-circle' style={this._footerPartStyle(Master.footerPartIcon, 'help')}/>
                        <Text style={this._footerPartStyle(Master.footerPartText, 'help')}>المساعدة</Text>
                    </View>
                </View>
            </View>
        );
    }
}