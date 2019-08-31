import Fonts from './Fonts';
import Colors from './Colors';
import {Dimensions} from 'react-native';


// class RegisterArea {
//     constructor() {
//         this.distanceBetween = 150;
//         this.startingPosition = Dimensions.get('window').height;
//         this.hight = Dimensions.get('window').height - this.distanceBetween;
//         this.endPosition = this.distanceBetween;
//     }
// }
//
//
// export const REGISTER_AREA_DETAILS = new RegisterArea();

export const Form = {
    header: {
        fontFamily: Fonts.elMessiriBold,
        fontSize: 50,
        color: Colors.burgundyColor,
    },
    secondHeader: {
        fontFamily: Fonts.elMessiriBold,
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 15,
    },
    registerHeader: {
        fontFamily: Fonts.elMessiriBold,
        fontSize: 30,
        color: '#000000',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#ffffff',
        alignSelf: 'stretch',
        textAlign: 'right',
        fontFamily: Fonts.elMessiriBold,
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    WithBlackBorder: {
        borderWidth: 1,
        borderColor: '#000000',
    },
    button: {
        borderRadius: 5,
        alignSelf: 'stretch',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
    },
    registerButton: {
        backgroundColor: Colors.mostBlackColor,
        borderColor: Colors.mostBlackColor,
    },
    successButton: {
        backgroundColor: Colors.successColor,
    },
    registerButtonText: {
        fontFamily: Fonts.elMessiriBold,
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
    },
    facebookButton: {
        backgroundColor: Colors.facebookColor,
        borderColor: Colors.facebookColor,
    },
    twitterButton: {
        backgroundColor: Colors.twitterColor,
        borderColor: Colors.twitterColor,
    },
    facebookButtonText: {
        fontFamily: Fonts.robotoBold,
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
    },
    buttonIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: '#ffffff',
        fontSize: 30,
    },
    separation: {
        alignSelf: 'stretch',
        height: 1,
        backgroundColor: '#ffffff',
        margin: 10,
    },
    newCustomerText: {
        color: '#ffffff',
        fontFamily: Fonts.elMessiriSemiBold,
        fontSize: 18,
        marginTop: 10,
    },
    newCustomerTextLink: {
        color: '#2980b9',
        textDecorationLine: 'underline',
    },
    registerArea: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'rgba(255,255,255,.9)',
    },
    closeRegisterAreaContainer: {
        position: 'absolute',
        top: 15,
        right: 15,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    closeRegisterArea: {
        fontSize: 20,
    },
    warningArea: {
        textAlign: 'right',
        fontFamily: Fonts.elMessiriMedium,
        alignSelf: 'stretch',
        fontSize: 18,

    },
};
