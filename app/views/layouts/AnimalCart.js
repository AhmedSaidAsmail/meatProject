import React from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    Text,
} from 'react-native';
import {Master} from '../../styles/Master';

export const FirstAnimalCart = (props) => {
    return (
        <TouchableOpacity style={Master.welcomeButton} onPress={props.onPress}>
            <View style={Master.welcomeButtonPart}>
                <Image style={Master.welcomeButtonImage}
                       source={{uri: props.getImageSource}}/>
            </View>
            <View style={Master.welcomeButtonPart}>
                <Text style={Master.welcomeButtonText}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
};
export const SecondAnimalCart = (props) => {
    return (
        <TouchableOpacity style={Master.welcomeButton} onPress={props.onPress}>
            <View style={Master.welcomeButtonPart}>
                <Text style={Master.welcomeButtonText}>{props.name}</Text>
            </View>
            <View style={Master.welcomeButtonPart}>
                <Image style={Master.welcomeButtonImage}
                       source={{uri: props.getImageSource}}/>
            </View>
        </TouchableOpacity>
    );
};