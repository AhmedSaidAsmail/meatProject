import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './middleware/reducers';
import Splash from './views/Splash';
import Home from './views/Home';
import Login from './views/Login';
import MainCategory from './views/MainCategory';

const Routes = createStackNavigator({
    Home: {
        screen: Home,
    },
    Splash: {
        screen: Splash,
    },
    Login: {
        screen: Login,
    },
    MainCategory:{
        screen:MainCategory
    },
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
});
const RoutesContainer = createAppContainer(Routes);

class Router extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <RoutesContainer/>
            </Provider>
        );
    }
}

export default Router;
