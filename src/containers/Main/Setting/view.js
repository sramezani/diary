import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Consts and Libs
import { AppSizes, AppStyles, AppColors } from '@theme/';
import { Util, Action } from '@lib/';

// Components
import { Text, Touchable, Icon } from '@components/';

/* Style ========================================== */
const styles = StyleSheet.create({
    container: {
        ...AppStyles.container,
        // ...AppStyles.align_c,
        backgroundColor: AppColors.bg
    },
    image: {
        width: AppSizes.screen_width,
        height: Util.scale(80),
        resizeMode: 'contain',
        marginBottom: Util.scale(20)
    },
    menuItem: {
        ...AppStyles.row,
        padding: Util.scale(10)
    },
    diaryBtn: {
        ...AppStyles.row,
        width: '100%',
        paddingVertical: Util.scale(10)
    },
    hr: {
        borderWidth: 0.6,
        borderColor: AppColors.primary,
        width: '90%',
        left: '5%',
        borderStyle: 'dashed',
        borderRadius : 1,
        // marginVertical: Util.scale(10)
    }
});

/* Component ====================================== */
class SettingView extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        
    }

    render() {
        return (
            <ImageBackground
                source={require('@images/bg.png')}
                blurRadius={9}
                style={[styles.container, { width: AppSizes.screen_width, height: '100%', resizeMode: 'cover' }]}
            >
                <View style={{ width: AppSizes.screen_width, marginLeft: -Util.scale(10) }}>
                    <Image source={require('@images/top-border.png')} style={styles.image} />
                </View>

                <View style={styles.hr} />

                <View style={styles.menuItem}>
                    <Touchable
                        style={[styles.diaryBtn]}
                        activeOpacity={0.9}
                        onPress={() => Action.navigate('Password')}
                    >
                        <Icon
                            style={{ paddingRight: Util.scale(10) }}
                            name="lock"
                            size={22}
                            color={AppColors.primary}
                        />
                        <Text color="primary" size="md" weight="bold">
                            Set password (pin)
                        </Text>
                    </Touchable>
                </View>
                <View style={styles.hr} />


                <View style={styles.menuItem}>
                    <Touchable
                        style={[styles.diaryBtn]}
                        activeOpacity={0.9}
                    >
                        <Icon
                            style={{ paddingRight: Util.scale(10) }}
                            name="format-color-fill"
                            size={22}
                            color="#878787"
                        />
                        <Text size="md" weight="bold" style={{ color: '#878787' }}>
                            Change theme (coming soon...)
                        </Text>
                    </Touchable>
                </View>
                <View style={styles.hr} />


                <View style={styles.menuItem}>
                    <Touchable
                        style={[styles.diaryBtn]}
                        activeOpacity={0.9}
                    >
                        <Icon
                            style={{ paddingRight: Util.scale(10) }}
                            name="font-download"
                            size={22}
                            color="#878787"
                        />
                        <Text size="md" weight="bold" style={{ color: '#878787' }}>
                            Change font (coming soon...)
                        </Text>
                    </Touchable>
                </View>
                <View style={styles.hr} />
                

            </ImageBackground>
        );
    }
}

/* Props ========================================== */
SettingView.propTypes = {
};

SettingView.defaultProps = {
};

/* Export Component =============================== */
export default SettingView;
