import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TextInput } from 'react-native';

// Consts and Libs
import { AppStyles, AppColors, AppFonts } from '@theme/';
import { Util } from '@lib/';


/* Styles ====================================== */
const styles = StyleSheet.create({

});

/* Component =================================== */
class CustomTextInput extends React.PureComponent {
    render() {
        return (
            <TextInput
                underlineColorAndroid={AppColors.border.input}
                selectionColor="#e2cbac"
                autoCapitalize="none"
                placeholderTextColor={AppColors.text.input_placeholder}
                {...this.props}
            />
        );
    }
}

/* Props ======================================= */
CustomTextInput.propTypes = {
};

CustomTextInput.defaultProps = {
};

/* Export Component ============================ */
export default CustomTextInput;
