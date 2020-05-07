import {
    createSwitchNavigator,
    createAppContainer,
    createStackNavigator
} from 'react-navigation'

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import MRPHome from '~/Screens/MRPHome';
import MRPDetail from '~/Screens/MRPDetail';

const LoginNavigator = createStackNavigator({
    Login,
});

const MRPNavigator = createStackNavigator({
    MRPHome,
    MRPDetail,
});

const AppNavigator = createSwitchNavigator(
    {
    CheckLogin,
    LoginNavigator,
    MRPNavigator,
    },
    {
        initialRouteName: 'CheckLogin',
    }
);

export default createAppContainer(AppNavigator);