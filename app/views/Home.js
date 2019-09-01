import React from 'react';
import {View} from 'react-native';
import MasterView from './_master';
import {website} from '../../app.json';
import axios from 'axios';
import {FirstAnimalCart, SecondAnimalCart} from './layouts/AnimalCart';
import Spinner from 'react-native-spinkit';
import {Master} from '../styles/Master';


export default class Home extends MasterView {
    constructor() {
        super();
    }

    componentDidMount() {
        super.componentDidMount();
        this.setState({
            activePage: 'home',
            title: 'نوع اللحم',
            fetchedData: false,
        });
        this._importData();
    }

    _importData() {
        axios.get(website + 'animals/json')
            .then(response => {
                let items = response.data;
                this.setState({fetchedData: this._listFetchedData(items)});
            });
    }

    _listFetchedData(items) {
        let list = [];
        const {navigate} = this.props.navigation;
        for (let index in items) {
            if (index % 2 === 0) {
                list.push(this._firstViewModel(navigate, items, index));
            } else {
                list.push(this._secondViewModel(navigate, items, index));
            }
        }
        return list;
    }

    _firstViewModel = (navigate, items, index) => {
        return (
            <FirstAnimalCart
                key={index}
                onPress={() => navigate('MainCategory', {id: items[index].id})}
                name={items[index].name}
                getImageSource={website + 'images/animals/' + items[index].image}
            />
        );
    };
    _secondViewModel = (navigate, items, index) => {
        return (
            <SecondAnimalCart
                key={index}
                onPress={() => navigate('MainCategory', {id: items[index].id})}
                name={items[index].name}
                getImageSource={website + 'images/animals/' + items[index].image}
            />
        );
    };
    _renderData = () => {
        if (!this.state.fetchedData) {
            return (
                <Spinner style={{alignSelf: 'center'}} color={'#bdc3c7'} size={60} type={'FadingCircleAlt'}/>
            );
        }
        return this.state.fetchedData;
    };

    _bodyContent() {
        return (
            <View style={Master.homeScreenContainer}>
                {this._renderData()}
            </View>
        );
    }
}