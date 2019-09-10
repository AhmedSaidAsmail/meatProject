import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import MasterView from './_master';
import {Master} from '../styles/Master';

export default class MeatSort extends MasterView {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            title: 'اختار النوع',
            cardinals: this.props.navigation.state.params.cardinals,
        };
    }

    _setCardinals = (sort) => {
        let {cardinals} = this.state;
        cardinals = {...cardinals, sort};
        alert(JSON.stringify(cardinals));
    };

    _bodyContent() {
        return (
            <View style={Master.publicContainer}>
                <TouchableOpacity style={Master.selectSort} onPress={() => this._setCardinals('سوانكي')}>
                    <Text style={Master.selectSortText}>سوانكي</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Master.selectSort} onPress={() => this._setCardinals('نعيمي')}>
                    <Text style={Master.selectSortText}>نعيمي</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Master.selectSort} onPress={() => this._setCardinals('عربي')}>
                    <Text style={Master.selectSortText}>عربي</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Master.selectSort} onPress={() => this._setCardinals('نجدي')}>
                    <Text style={Master.selectSortText}>نجدي</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Master.selectSort} onPress={() => this._setCardinals('حري')}>
                    <Text style={Master.selectSortText}>حري</Text>
                </TouchableOpacity>
            </View>
        );
    }
}