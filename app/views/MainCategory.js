import React from 'react';
import {Text} from 'react-native';
import MasterView from './_master';

export default class MainCategory extends MasterView {
    componentDidMount() {
        const {mainCategory} = this.props.navigation.state.params;
        this.setState({mainCategory, title: 'اختار الحجم'});
    }

    _bodyContent() {
        return (
            <Text>test {this.state.mainCategory}</Text>
        );
    }
}