/**
 * App Navigation
 *
 * */
import React from 'react';
import { Easing, Animated, View } from 'react-native';
import {
    createStackNavigator,
    createSwitchNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createAppContainer,
    HeaderBackButton
} from 'react-navigation';
// Consts and Libs
import { AppColors, AppFonts, AppStyles, AppSizes } from '@theme/';

// Screens
import Splash from '@containers/Intro/Splash/';
import Login from '@containers/Intro/Login/';

// Components
import { Icon, Touchable } from '@components';


/* Navigation Options ======================== */
const headerOptions = {
    headerTitleContainerStyle: {
        ...AppStyles.align_c
    },
    headerStyle: {
        backgroundColor: AppColors.background.primary
    },
    headerTitleStyle: {
        textAlign: 'center',
        ...AppFonts.base,
        ...AppFonts.xlg,
        color: AppColors.text.white
    }
};

/* Transition Config ========================= */
const transitionConfig = () => ({
    transitionSpec: {
        duration: 200,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true
    },
    screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;

        const thisSceneIndex = scene.index;
        const width = layout.initWidth;

        const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [width, 0]
        });

        return { transform: [{ translateX }] };
    }
});

const navigationConfig = {
    defaultNavigationOptions: {
        ...headerOptions,
        headerBackImage: <Icon name="arrow-back" size={20} />,
        headerBackTitle: null
    },
    transitionConfig
    // headerMode: 'float'
};

const AutStackNavigator = createStackNavigator({

    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    }

}, {
    ...navigationConfig
});

const AppNavigatorScreens = {
    Splash: {
        screen: Splash,
        navigationOptions: { header: null }
    },
    Auth: {
        screen: AutStackNavigator,
        navigationOptions: { header: null }
    },
    // Main: {
    //     screen: MainNavigator,
    //     navigationOptions: { header: null }
    // }
};

const AppNavigatorConfig = {
    initialRouteName: 'Splash'
};

/* Export Component ========================== */
export default createAppContainer(createSwitchNavigator(AppNavigatorScreens, AppNavigatorConfig));
