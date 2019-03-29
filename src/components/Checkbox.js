import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, Platform } from 'react-native';
import { Checkbox } from 'react-native-material-ui';


// Consts and Libs
import { AppSizes, AppFonts } from '@theme/';
import { Util } from '@lib/';


/* Styles ====================================== */
const styles = StyleSheet.create({
    label: {
        ...AppFonts.base,
        marginLeft: 0
    }
});

/* Component =================================== */
class CustomCheckbox extends React.PureComponent {
	render() {
		return (
			<Checkbox {...this.props} style={{ label: styles.label }} />
		);
	}
}

/* Props ======================================= */
CustomCheckbox.propTypes = {
};

CustomCheckbox.defaultProps = {
};

/* Export Component ============================ */
export default CustomCheckbox;

