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

import MainPage from '@containers/Main/MainPage/';
import DiaryBook from '@containers/Main/DiaryBook/';
import Setting from '@containers/Main/Setting/';
import Note from '@containers/Main/Note/';
import Password from '@containers/Main/Password/';


// Components
import { Icon, Touchable, Text } from '@components';
import { Util } from '@lib/';

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

const TabNavigator = createBottomTabNavigator({
    MainPage: {
        screen: MainPage,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: ({ focused }) => <Text size="xs" style={{ textAlign: 'center', color: focused ? AppColors.active : AppColors.deactive }}>Home</Text>,
            tabBarIcon: ({ focused }) =>
                    <Icon
                        name='home'
                        size={Util.scale(22)}
                        color={focused ? AppColors.active : AppColors.deactive}
                    />
        })
    },
    DiaryBook: {
        screen: DiaryBook,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: ({ focused }) => <Text size="xs" style={{ textAlign: 'center', color: focused ? AppColors.active : AppColors.deactive }}>Diary Book</Text>,
            tabBarIcon: ({ focused }) =>
                    <Icon
                        name='photo'
                        size={Util.scale(22)}
                        color={focused ? AppColors.active : AppColors.deactive}
                    />
        })
    },
    Setting: {
        screen: Setting,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: ({ focused }) => <Text size="xs" style={{ textAlign: 'center', color: focused ? AppColors.active : AppColors.deactive }}>Setting</Text>,
            tabBarIcon: ({ focused }) =>
                    <Icon
                        name='settings'
                        size={Util.scale(22)}
                        color={focused ? AppColors.active : AppColors.deactive}
                    />
        })
    }
}, {
    initialRouteName: 'MainPage',
    tabBarOptions: {
        labelStyle: {
            fontSize: 15
        },
        style: {
            backgroundColor: '#5b2445',
            borderColor: '#471a35'
        }
    },
    // barStyle: { backgroundColor: AppColors.primary }
});

const MainNavigator = createStackNavigator({

    AllPages: {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        }
    },

    Note: {
        screen: Note,
        navigationOptions: {
            header: null
        }
    },

    Password: {
        screen: Password,
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
    Main: {
        screen: MainNavigator,
        navigationOptions: { header: null }
    }
};

const AppNavigatorConfig = {
    initialRouteName: 'Splash'
};

/* Export Component ========================== */
export default createAppContainer(createSwitchNavigator(AppNavigatorScreens, AppNavigatorConfig));
