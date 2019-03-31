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
        width: Util.scale(70),
        height: Util.scale(60),
        marginBottom: Util.scale(10)
    },
    text: {
        marginBottom: Util.scale(20)
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
            // console.log(2121);
        }, 1000);
    }


    render() {
        return (
            <LinearGradient
                style={styles.container}
                colors={[AppColors.primary, AppColors.secondary, AppColors.primary]}
            >
                <Image source={require('@images/icon.png')} style={styles.icon} />
                <Text color="white" style={styles.text}>Diary</Text>
                <Loading />
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
