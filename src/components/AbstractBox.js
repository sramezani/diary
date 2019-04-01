
import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import moment from 'moment';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';
import { Util } from '@lib/';

// component
import { Text, Touchable } from '@components/';

/* Styles ==================================== */
const styles = StyleSheet.create({
    box: {
        width: AppSizes.screen_width - Util.scale(20),
        minHeight: Util.scale(50),
        padding: Util.scale(10),
        borderWidth: 1,
        borderColor: AppColors.secondary,
        borderRadius: Util.scale(4),
        marginVertical: Util.scale(5),
        backgroundColor: "#efefef"
    },
    rightBox: {
        flex: 1,
        paddingLeft: Util.scale(5),
        borderStyle: 'dashed',
        borderRadius : 1,
        borderLeftWidth: 0.6,
        borderLeftColor: AppColors.grey
    },
    hr: {
        borderWidth: 0.6,
        borderColor: AppColors.grey,
        width: '80%',
        left: 0,
        borderStyle: 'dashed',
        borderRadius : 1,
        marginVertical: Util.scale(3)
    }
});
/* Component ==================================== */
class AbstractBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <Touchable
                style={styles.box}
                onPress={this.props.onDiaryPress}
                activeOpacity={1}
            >
                <View style={[AppStyles.row, { flex: 1 }]}>
                    <View style={{ flex: 3, paddingRight: Util.scale(7) }}>
                        <Text numberOfLines={1} size="sm" weight="bold" color="textBlack" style={AppStyles.text_l}>
                            {this.props.title}
                        </Text>
                    </View>
                    <View style={styles.rightBox}>
                        <Text size="xs" color="green">
                            {moment(this.props.date).format('ll')}
                        </Text>
                    </View>
                </View>
                <View style={[AppStyles.row, { flex: 2, marginTop: Util.scale(5) }]}>
                    <View style={{ flex: 3, paddingRight: Util.scale(7) }}>
                        <View style={styles.hr} />
                        <Text numberOfLines={3} size="sm" color="textBlack" style={AppStyles.text_l}>
                            {this.props.note}
                        </Text>
                    </View>
                    <View style={[styles.rightBox, { marginTop: -Util.scale(5) }]}>
                        
                    </View>
                </View>


            </Touchable>
        );
    }
}

/* Component Props ==================================== */
AbstractBox.propTypes = {
    // date: PropTypes.object,
    date: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	]),
    title: PropTypes.string,
    note: PropTypes.string,
    onDiaryPress: PropTypes.func
};

AbstractBox.defaultProps = {
    date: '',
    title: '',
    note: '',
    onDiaryPress: () => {}
};

/* Export Component ==================================== */
export default AbstractBox;
