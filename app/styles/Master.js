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
    mainCategoryContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    mainCategoryCart: {
        alignItems: 'center',
        borderColor: Colors.redColor,
        borderWidth: 1,
        marginHorizontal: 30,
        marginBottom: 70,
        //borderRadius: 5,
    },
    mainCategoryImage: {
        width: 280,
        height: 170,
        resizeMode: 'contain',
    },
    mainCategoryTextContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        top: 110,
        borderRadius: 60,
        borderColor: Colors.redColor,
        borderWidth: 2,
        shadowColor: 'rgba(0,0,0,.6)',
        shadowOffset: {width: 1, height: -1},
        shadowRadius: 10,
        height: 120,
        width: 120,
    },
    mainCategoryText: {
        fontFamily: Fonts.elMessiriBold,
        color: Colors.redColor,
        fontSize: 45,
        textShadowColor: '#000000',
        textShadowOffset: {height: 1, width: -1},
        textShadowRadius: 10,
    },
};
