import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-material-ui';


// Consts and Libs
import { AppSizes } from '@theme/';
import { Util } from '@lib/';


/* Styles ====================================== */
const styles = StyleSheet.create({

});

/* Component =================================== */
class CustomButton extends React.PureComponent {

	get _style() {
		const containerStyle = {
			borderRadius: this.props.round
		};

		const textStyle = {
			fontWeight: '400'
		};

		switch (this.props.color) {
			case 'green':
				containerStyle.backgroundColor = AppColors.green;
				textStyle.color = AppColors.white;
				break;

			case 'desabled':
				containerStyle.backgroundColor = '#a5d1b7';
				textStyle.color = AppColors.white;
				break;

			default: break;
		}

		if (this.props.fullWidth) {
			containerStyle.width = '100%';
		}

		const styleProp = {
			container: [containerStyle],
			text: [textStyle]
		};

		if (this.props.style) {
			if (this.props.style.container) {
				styleProp.container.push(this.props.style.container);
			}

			if (this.props.style.text) {
				styleProp.text.push(this.props.style.text);
			}
		}


		return styleProp;
	}

	render() {
		return (
			<Button
				{...this.props}
				style={this._style}
			/>
		);
	}
}

/* Props ======================================= */
CustomButton.propTypes = {
	style: PropTypes.object,
	color: PropTypes.string,
	round: PropTypes.number,
	fullWidth: PropTypes.bool
};

CustomButton.defaultProps = {
	style: {},
	color: 'green',
	round: AppSizes[5],
	fullWidth: true
};

/* Export Component ============================ */
export default CustomButton;
