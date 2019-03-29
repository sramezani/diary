import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';


/* Component =========================================== */
class Touchable extends React.PureComponent {
    constructor(props) {
        super(props);

        this._onPress = this._onPress.bind(this);
    }


    _onPress() {
        this.props.onPress();
    }


    render() {
        const { activeOpacity, children, disabled, style, ...restProps } = this.props;

        return (
            <TouchableOpacity
                {...restProps}
                style={style}
                disabled={disabled}
                activeOpacity={activeOpacity}
                onPress={this._onPress}
            >
                {children}
            </TouchableOpacity>
        );
    }
}

/* Props =================================================== */
Touchable.propTypes = {
	style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.array
    ]),
	onPress: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    activeOpacity: PropTypes.number
};

Touchable.defaultProps = {
    style: {},
	onPress: () => {},
    disabled: false,
    children: null,
    activeOpacity: 0.8
};

/* Export Component ========================================= */
export default Touchable;
