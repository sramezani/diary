import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Icon } from 'react-native-material-ui';


// Consts and Libs
import { AppSizes, AppFonts } from '@theme/';
import { Util } from '@lib/';


/* Styles ====================================== */
const styles = StyleSheet.create({
});

/* Component =================================== */
class Loading extends React.PureComponent {
	render() {
		return (
			<ActivityIndicator color={this.props.color} />
		);
	}
}

/* Props ======================================= */
Loading.propTypes = {
    color: PropTypes.string
};

Loading.defaultProps = {
    color: '#fff'
};

/* Export Component ============================ */
export default Loading;

