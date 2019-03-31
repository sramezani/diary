import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Animated } from 'react-native';
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
        ...AppStyles.align_c,
    },
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
            <View style={styles.container}>
                <Touchable
                    style={[styles.diaryBtn]}
                    activeOpacity={0.9}
                    onPress={() => Action.navigate('Password')}
                >
                    <Text>
                        select password (pin)
                    </Text>
                </Touchable>
            </View>
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
