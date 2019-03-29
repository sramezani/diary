import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, Platform } from 'react-native';

// Consts and Libs
import { AppStyles, AppColors, AppFonts } from '@theme/';
import { Util } from '@lib/';


/* Styles ====================================== */
const styles = StyleSheet.create({

});

/* Component =================================== */
class CustomText extends React.PureComponent {
	get _style() {
		let style = {
			...AppFonts.base,
			color: AppColors.text[this.props.color],
			fontSize: AppFonts[this.props.size].fontSize,
			fontWeight: AppFonts[this.props.weight]
		};

		// ---------------------- Decoration
		if (this.props.onPress) {
			style.textDecorationLine = 'underline';
		}

		// ---------------------- Paragraph
		if (this.props.p) {
			style.lineHeight = AppFonts[this.props.size].lineHeight * 1.35;
		}

		style = [style];

		if (this.props.style) style.push(this.props.style);


		return style;
	}

	render() {
		const { children, ...restProps } = this.props;
		return (
			<Text {...restProps} style={this._style}>
				{children}
			</Text>
		);
	}
}

/* Props ======================================= */
CustomText.propTypes = {
	size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xlg', 'xxlg']),
	color: PropTypes.string,
	weight: PropTypes.oneOf(['ultra_bold', 'bold', 'semi_bold', 'normal']),

	p: PropTypes.bool, // paragraph

	onPress: PropTypes.func,
	style: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.number,
		PropTypes.object
	]),
	children: PropTypes.node
};

CustomText.defaultProps = {
	size: 'md',
	color: 'black',
	weight: 'normal',

	p: false,

	onPress: null,
	style: null,
	children: null
};

/* Export Component ============================ */
export default CustomText;
