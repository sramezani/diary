
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
        borderColor: '#cfcfcf',
        borderRadius: Util.scale(3),
        marginVertical: Util.scale(5)
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
            <View style={styles.box}>
                <View style={[AppStyles.row, { flex: 1 }]}>
                    <View style={{ flex: 3, paddingRight: Util.scale(7) }}>
                        <Text numberOfLines={1} size="sm" weight="bold" color="textBlack">
                            {this.props.title}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text size="xs" color="textBlack">
                            {moment(this.props.date).format('ll')}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 2, marginTop: Util.scale(5) }}>
                    <Text numberOfLines={3} size="sm" color="textBlack">
                        {this.props.note}
                    </Text>
                </View>
            </View>
        );
    }
}

/* Component Props ==================================== */
AbstractBox.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    note: PropTypes.string
};

AbstractBox.defaultProps = {
    date: '',
    title: '',
    note: ''
};

/* Export Component ==================================== */
export default AbstractBox;
