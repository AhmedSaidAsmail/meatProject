import Colors from './Colors';
import Fonts from './Fonts';

export const Master = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerArea: {
        flex: 1,
        backgroundColor: Colors.redColor,
        alignSelf: 'stretch',
    },
    headerTitle: {
        color: '#ffffff',
        fontFamily: Fonts.elMessiriBold,
        fontSize: 40,
        textAlign: 'center',
    },
    body: {
        flex: 9,
        alignSelf: 'stretch',
    },
    footer: {
        flex: 1,
        backgroundColor: Colors.redColor,
        alignSelf: 'stretch',
        borderTopColor: '#bdc3c7',
        borderTopWidth: 1,
        flexDirection: 'row',
    },
    footerPart: {
        flex: 1,
        justifyContent: 'center',
        // alignContent: 'center',
        // textAlign: 'center',
        // backgroundColor: 'red',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    footerPartIcon: {
        textAlign: 'center',
        fontSize: 25,
        color: '#ffffff',
    },
    footerPartText: {
        fontFamily: Fonts.elMessiriSemiBold,
        textAlign: 'center',
        color: '#ffffff',
    },
    footerPartActive: {
        color: '#000000',
    },
    welcomeButton: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#bdc3c7',
        marginTop: 10,
        borderRadius: 5,
        overflow: 'hidden',
    },
    welcomeButtonPart: {
        flex: 1,
    },
    welcomeButtonImage: {
        width: 200,
        height: 160,
        resizeMode: 'contain',
    },
    welcomeButtonText: {
        fontFamily: Fonts.elMessiriBold,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 50,
        flex: 1,
    },
    homeScreenContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'center',
        flex: 1,
        paddingBottom: 40,
    },
};
