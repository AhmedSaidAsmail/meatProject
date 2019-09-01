import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import MasterView from './_master';
import {Master} from '../styles/Master';
import {website} from '../../app.json';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export default class MainCategory extends MasterView {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            id: this.props.navigation.state.params.id,
            title: 'اختار الحجم',
            loading: true,
            response: null,
        };
    }

    componentDidMount() {
        //const {mainCategory} = this.props.navigation.state.params;
        this._importData();
        // this.setState({title: 'اختار الحجم', mainCategoryId: 2});
    }

    _importData = () => {
        const {id} = this.state;
        axios.get(website + 'animals/json/show/' + id)
            .then(
                response => {
                    this.setState({loading: false, response: response.data});
                }
            );
    };

    _renderImportData() {
        const response = this.state.response;
        return (
            <View>
                <TouchableOpacity style={Master.mainCategoryCart}>
                    <Image
                        style={Master.mainCategoryImage}
                        source={{uri: website + 'images/animals/' + response.image}}
                    />
                    <View style={Master.mainCategoryTextContainer}>
                        <Text style={Master.mainCategoryText}>كامل</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Master.mainCategoryCart}>
                    <Image
                        style={Master.mainCategoryImage}
                        source={{uri: website + 'images/animals/' + response.parts_image}}
                    />
                    <View style={Master.mainCategoryTextContainer}>
                        <Text style={Master.mainCategoryText}>اجزاء</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _renderDate = () => {
        if (this.state.loading) {
            return (
                <Spinner style={{alignSelf: 'center'}} color={'#bdc3c7'} size={60} type={'FadingCircleAlt'}/>
            );
        }
        return this._renderImportData();
    };

    _bodyContent() {
        return (
            <View style={Master.mainCategoryContainer}>
                {this._renderDate()}
            </View>
        );
    }
}