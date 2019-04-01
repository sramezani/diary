import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Consts and Libs
import { AppSizes, AppStyles, AppColors } from '@theme/';
import { Util, Action } from '@lib/';

// Components
import { Text, Loading } from '@components/';

/* Style ========================================== */
const styles = StyleSheet.create({
    container: {
        ...AppStyles.container,
        ...AppStyles.align_c
    },
    icon: {
        width: AppSizes.screen_width / 1.3,
        resizeMode: 'contain',
    },
    text: {
        marginTop: -Util.scale(30)
    }
});

/* Component ====================================== */
class SplashView extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        StatusBar.setBackgroundColor(AppColors.primary);
        setTimeout(() => {
            if (this.props.pin) {
                Action.navigate('Login');
            }
            else {
                Action.navigate('MainPage');
            }
        }, 1000);
    }


    render() {
        return (
            <LinearGradient
                style={styles.container}
                colors={[AppColors.primary, AppColors.secondary, AppColors.primary]}
            >
                <Image source={require('@images/tplogo.png')} style={styles.icon} />
                <Text color="white" size="lg" style={styles.text}>write your mind</Text>
            </LinearGradient>
        );
    }
}

/* Props ========================================== */
SplashView.propTypes = {
    pin: PropTypes.string
};

SplashView.defaultProps = {
    pin: ''
};

/* Export Component =============================== */
export default SplashView;
