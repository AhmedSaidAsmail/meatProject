import React from 'react';
import MasterView from './_master';
import {
    Text,
    View,
    ScrollView,
} from 'react-native';
import {Master, GridStyle} from '../styles';

export default class MeatPart extends MasterView {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            title: 'اختار جزئ',
        };
    }

    _bodyContent() {
        return (
            <ScrollView style={Master.secondContainer}>
                <View style={GridStyle.row}>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                </View>
                <View style={GridStyle.row}>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                </View>
                <View style={GridStyle.row}>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                </View>
                <View style={GridStyle.row}>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                </View>
                <View style={GridStyle.row}>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                </View>
                <View style={GridStyle.row}>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                    <View style={GridStyle.colMd6}>
                        <View style={{width: '100%', height: 200, backgroundColor: '#ffffff', marginTop: 15,}}>
                            <Text>test</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}