import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Consts and Libs
import { AppSizes, AppStyles, AppColors } from '@theme/';
import { Util } from '@lib/';

// Components
import { Text, Touchable, Icon } from '@components/';

/* Style ========================================== */
const styles = StyleSheet.create({
    container: {
        ...AppStyles.container,
        ...AppStyles.align_c,
        backgroundColor: AppColors.primary
    },
    top: {
        flex: 2,
        ...AppStyles.align_c
    },
    middle: {
        flex: 1,
        ...AppStyles.row
    },
    bottom: {
        flex: 3,
        // backgroundColor: 'red',
        width: AppSizes.screen_width
    },
});

/* Component ====================================== */
class LoginView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedNumberCount: 0
        };

        this.selectedNumber = '';
        this.numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['', 0, 'back']];
        this._selectNumber = this._selectNumber.bind(this);
    }

    componentDidMount() {
        
    }

    _selectNumber(item) {
        if (item === 'back') {
            this.selectedNumber = this.selectedNumber.slice(0, -1);
            this.setState({ selectedNumberCount: this.selectedNumber.length });
        }
        else if (item) {
            this.selectedNumber = `${this.selectedNumber}${item}`;
            this.setState({ selectedNumberCount: this.selectedNumber.length });
            if ( this.selectedNumber.length === 4 ) {
                if ( this.selectedNumber === '1234' ) {
                    console.log('oooooooooooops');
                    this.selectedNumber = '';
                }
                else {
                    console.log('noooooooooooo');
                    this.selectedNumber = '';
                }
            }
        }
        
        console.log(this.selectedNumber);
    }

    render() {
        return (
            <LinearGradient
                style={styles.container}
                colors={[AppColors.primary, AppColors.primary]}
            >
                <View style={styles.top}>
                    <Text size="lg" color="white">
                        Enter Your Pin
                    </Text>
                </View>
                <View style={styles.middle}>
                    <Icon
                        style={{ marginHorizontal: Util.scale(5) }}
                        name={this.selectedNumber.length >= 1 ? 'radio-button-checked' : 'radio-button-unchecked' }
                        size={Util.scale(23)}
                        color='white'
                    />
                    <Icon
                        style={{ marginHorizontal: Util.scale(5) }}
                        name={this.selectedNumber.length >= 2 ? 'radio-button-checked' : 'radio-button-unchecked' }
                        size={Util.scale(23)}
                        color='white'
                    />
                    <Icon
                        style={{ marginHorizontal: Util.scale(5) }}
                        name={this.selectedNumber.length >= 3 ? 'radio-button-checked' : 'radio-button-unchecked' }
                        size={Util.scale(23)}
                        color='white'
                    />
                    <Icon
                        style={{ marginHorizontal: Util.scale(5) }}
                        name={this.selectedNumber.length >= 4 ? 'radio-button-checked' : 'radio-button-unchecked' }
                        size={Util.scale(23)}
                        color='white'
                    />
                </View>
                <View style={styles.bottom}>
                    {this.numbers.map((data, index) => (
                        <View key={index} style={[AppStyles.row, { flex: 1 }]}>
                            {data.map((item, i) => (
                                <Touchable
                                    key={i}
                                    activeOpacity={0.5}
                                    onPress={() => { this._selectNumber(item) }}
                                    style={{ flex: 1 }}
                                >
                                    <View
                                        style={[
                                            { alignItems: 'center' }
                                        ]}
                                    >
                                        <View style={[styles.itemPrice]}>
                                            {
                                                item === 'back' ?
                                                    <Icon
                                                        style={{ marginHorizontal: Util.scale(5) }}
                                                        name='backspace'
                                                        size={Util.scale(22)}
                                                        color='white'
                                                    />
                                                :
                                                    <Text size="lg" color="white">
                                                        {item}
                                                    </Text>
                                            }
                                            
                                        </View>
                                    </View>
                                </Touchable>
                            ))}
                        </View>
                        
                    ))}
                </View>
            </LinearGradient>
            // <View style={styles.container}>
                
                
            // </View>
        );
    }
}

/* Props ========================================== */
LoginView.propTypes = {
};

LoginView.defaultProps = {
};

/* Export Component =============================== */
export default LoginView;
