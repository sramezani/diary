import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';


// Consts and Libs
import { AppStyles, AppColors, AppFonts } from '@theme/';
import { Util } from '@lib/';


/* Styles ====================================== */
const styles = StyleSheet.create({

});

/* Component =================================== */
class RemoteImage extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: true
		};
	}

	render() {
		const { source, style, ...restProps } = this.props;
		return (
			<FastImage
                {...restProps}
                style={[style, { display: this.state.isLoaded ? 'flex' : 'none' }]}
                source={{
                    priority: FastImage.priority.normal,
                    ...source
                }}
			/>
		);
	}
}

/* Props ======================================= */
RemoteImage.propTypes = {
	source: PropTypes.object.isRequired
};

RemoteImage.defaultProps = {
};

/* Export Component ============================ */
export default RemoteImage;
