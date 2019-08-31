import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    Easing,
    Dimensions,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Main, Form, REGISTER_AREA_DETAILS} from '../styles';
import {authenticateUsers} from '../middleware/reducers/action/Auth';
import {connect} from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startingPosition: new Animated.Value(Dimensions.get('window').height),
            arabicWord_1: 'ليس لدي حساب؟',
            arabicWord_2: 'تسجيل حساب جديد',
            email: null,
            password: null,
            errorMessage: null,
        };
    }

    _moveRegisterArea = async () => {
        Animated.timing(this.state.startingPosition, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear(),
        }).start();
    };
    _hideRegisterArea = async () => {
        Animated.timing(this.state.startingPosition, {
            toValue: Dimensions.get('window').height,
            duration: 300,
            easing: Easing.linear(),
        }).start();
    };

    _renderLoginButtonContent() {
        if (this.props.loading) {
            return (
                <ActivityIndicator/>
            );
        }
        return (<Text style={Form.registerButtonText}>تسجيل</Text>);
    }

    _onLoginPress() {
        const {email, password} = this.state;
        this.props.authenticateUsers({email, password});
    }

    _getErrorMessage() {
        if (this.props.error) {
            //this.setState({errorMessage: 'اسم المستخدم او كلمة السر غير صحيحة'});
            return 'اسم المستخدم او كلمة السر غير صحيحة';
        }
        return '';
    }

    componentDidMount() {
        //this._getErrorMessage();
    }

    render() {
        return (
            <View style={Main.container}>
                <Animated.View style={[Form.registerArea, {top: this.state.startingPosition}]}>
                    <TouchableOpacity style={Form.closeRegisterAreaContainer}
                                      onPress={this._hideRegisterArea.bind(this)}>
                        <Icon name="times" style={Form.closeRegisterArea}/>
                    </TouchableOpacity>
                    <Text style={Form.registerHeader}>تسجيل حساب جديد</Text>
                    <TextInput
                        style={[Form.input, Form.WithBlackBorder]}
                        placeholder="رقم الجوال"
                    />
                    <TextInput
                        style={[Form.input, Form.WithBlackBorder]}
                        placeholder="البريد الاكتروني"
                    />
                    <TextInput
                        secureTextEntry
                        style={[Form.input, Form.WithBlackBorder]}
                        placeholder="كلمة الدخول"
                    />
                    <TextInput
                        secureTextEntry
                        style={[Form.input, Form.WithBlackBorder]}
                        placeholder="اعادة كلمة المرور"
                    />
                    <TouchableOpacity style={[Form.button, Form.successButton]}>
                        <Text style={Form.registerButtonText}>تسجيل دخول مستخدم جديد</Text>
                    </TouchableOpacity>
                </Animated.View>
                <Text style={Form.header}>لحوم</Text>
                <Image
                    style={{width: 125, height: 60}}
                    source={{uri: 'https://souvenirsharm.com/meatProject/meat1.png'}}
                />
                <Text style={Form.secondHeader}>تسجيل الدخول</Text>
                <Text style={Form.warningArea}>{this._getErrorMessage()}</Text>
                <TextInput
                    style={Form.input}
                    placeholder="البريد الاكتروني"
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput
                    secureTextEntry
                    style={Form.input}
                    placeholder="كلمة الدخول"
                    onChangeText={(password) => this.setState({password})}
                />
                <TouchableOpacity style={[Form.button, Form.registerButton]} onPress={this._onLoginPress.bind(this)}>
                    {this._renderLoginButtonContent()}
                </TouchableOpacity>
                <View style={Form.separation}/>
                <TouchableOpacity style={[Form.button, Form.facebookButton]}>
                    <Icon
                        name="facebook-f"
                        style={Form.buttonIcon}
                    />
                    <Text style={Form.facebookButtonText}>Log in with facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Form.button, Form.twitterButton]}>
                    <Icon
                        name="twitter"
                        style={Form.buttonIcon}
                    />
                    <Text style={Form.facebookButtonText}>Log in with twitter</Text>
                </TouchableOpacity>
                <Text style={Form.newCustomerText}>
                    {this.state.arabicWord_1}
                    <Text
                        style={Form.newCustomerTextLink}
                        onPress={this._moveRegisterArea.bind(this)}
                    >
                        {this.state.arabicWord_2}
                    </Text>
                </Text>
            </View>
        );
    }
}

let authProps = (state) => {
    return {
        email: state.auth.email,
        loading: state.auth.loading,
        error: state.auth.error,
    };
};
export default connect(authProps, {authenticateUsers})(Login);