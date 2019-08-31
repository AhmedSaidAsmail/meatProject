import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import MasterView from './_master';
import {website} from '../../app.json';
import {Master} from "../styles/Master";
import axios from 'axios';


export default class Home extends MasterView {
    constructor() {
        super();
    }

    componentDidMount() {
        super.componentDidMount();
        this.setState({activePage: 'home', testVar: 'testing', title: 'نوع اللحم'});
    }

    _fetchingData() {
        var returnedData = null;
        const {navigate} = this.props.navigation;
        axios.get('https://tonsoftours.com/MeatProjectTesting/test/public/animals/json')
            .then(response => {
                let data = response.data;
                data.map((item, index) => {
                    returnedData += (
                        <TouchableOpacity style={Master.welcomeButton}
                                          onPress={() => navigate('MainCategory', {mainCategory: 'cow'})}>
                            <View style={Master.welcomeButtonPart}>
                                <Image style={Master.welcomeButtonImage}
                                       source={{uri: website + 'images/animals/' + item.image}}/>
                            </View>
                            <View style={Master.welcomeButtonPart}>
                                <Text style={Master.welcomeButtonText}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                });
                return returnedData;
            });
    }

    _bodyContent() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{paddingLeft: 15, paddingRight: 15}}>
                {this._fetchingData()}
                <TouchableOpacity style={Master.welcomeButton}
                                  onPress={() => navigate('MainCategory', {mainCategory: 'cow'})}>
                    <View style={Master.welcomeButtonPart}>
                        <Image style={Master.welcomeButtonImage}
                               source={{uri: website + 'images/cow-symbol.png'}}/>
                    </View>
                    <View style={Master.welcomeButtonPart}>
                        <Text style={Master.welcomeButtonText}>عجل</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Master.welcomeButton}>
                    <View style={Master.welcomeButtonPart}>
                        <Text style={Master.welcomeButtonText}>حاشي</Text>
                    </View>
                    <View style={Master.welcomeButtonPart}>
                        <Image style={Master.welcomeButtonImage}
                               source={{uri: website + 'images/camel-symbol.png'}}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Master.welcomeButton}>
                    <View style={Master.welcomeButtonPart}>
                        <Image style={Master.welcomeButtonImage}
                               source={{uri: website + 'images/sheep-symbol.png'}}/>
                    </View>
                    <View style={Master.welcomeButtonPart}>
                        <Text style={Master.welcomeButtonText}>غنم</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}