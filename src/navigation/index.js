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
import SplashContainer from '@containers/Intro/Splash/';

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
    navigationOptions: {
        ...headerOptions,
        headerBackImage: <Icon name="arrow-back" size={20} />,
        headerBackTitle: null
    },
    transitionConfig
    // headerMode: 'float'
};


const AppNavigatorScreens = {
    Splash: {
        screen: SplashContainer,
        navigationOptions: { header: null }
    }
};

const AppNavigatorConfig = {
    initialRouteName: 'Splash'
};

/* Export Component ========================== */
export default createAppContainer(createSwitchNavigator(AppNavigatorScreens, AppNavigatorConfig));
