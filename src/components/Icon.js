import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-material-ui';


// Consts and Libs
import { AppSizes, AppFonts } from '@theme/';
import { Util } from '@lib/';


/* Styles ====================================== */
const styles = StyleSheet.create({
});

/* Component =================================== */
class CustomIcon extends React.PureComponent {
	render() {
		return (
			<Icon {...this.props} />
		);
	}
}

/* Props ======================================= */
CustomIcon.propTypes = {
};

CustomIcon.defaultProps = {
};

/* Export Component ============================ */
export default CustomIcon;

