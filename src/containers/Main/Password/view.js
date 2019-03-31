import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Consts and Libs
import { AppSizes, AppStyles, AppColors } from '@theme/';
import { Util, Action } from '@lib/';

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
    selectedNum: {
        flex: 1,
        margin: 10,
        height: '50%',
        borderWidth: 1,
        borderColor: '#fff',
        ...AppStyles.align_c,
        backgroundColor: AppColors.secondary
    }
});

/* Component ====================================== */
class PasswordView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedNumber: ''
        };

        this.selectedNumber = '';
        this.numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['', 0, 'back']];
        this._selectNumber = this._selectNumber.bind(this);
        this._submit = this._submit.bind(this);
    }

    componentDidMount() {
        
    }

    _selectNumber(item) {
        if (item === 'back') {
            this.selectedNumber = this.selectedNumber.slice(0, -1);
            this.setState({ selectedNumber: this.selectedNumber });
        }
        else if (item && this.selectedNumber.length < 4) {
            this.selectedNumber = `${this.selectedNumber}${item}`;
            this.setState({ selectedNumber: this.selectedNumber });

        }
        console.log(this.selectedNumber);
    }

    _submit() {
        this.props.addPinAction(this.state.selectedNumber);
    }

    render() {
        return (
            <LinearGradient
                style={styles.container}
                colors={[AppColors.primary, AppColors.primary]}
            >
                <View style={styles.top}>
                    <Text size="lg" color="white">
                        Select 4 digit for password
                    </Text>
                    <Touchable onPress={() => this._submit()}>
                        <Icon
                            style={{ padding: Util.scale(20), paddingLeft: Util.scale(15) }}
                            name="check"
                            size={25}
                            color={AppColors.white}
                        />
                    </Touchable>
                </View>
                <View style={styles.middle}>
                    <View style={styles.selectedNum}>
                        <Text size="md" color="white" weight="bold">
                            {this.state.selectedNumber.charAt(0)}
                        </Text>
                    </View>
                    <View style={styles.selectedNum}>
                        <Text size="md" color="white" weight="bold">
                            {this.state.selectedNumber.charAt(1)}
                        </Text>
                    </View>
                    <View style={styles.selectedNum}>
                        <Text size="md" color="white" weight="bold">
                            {this.state.selectedNumber.charAt(2)}
                        </Text>
                    </View>
                    <View style={styles.selectedNum}>
                        <Text size="md" color="white" weight="bold">
                            {this.state.selectedNumber.charAt(3)}
                        </Text>
                    </View>
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
PasswordView.propTypes = {
    addPinAction: PropTypes.func.isRequired
};

PasswordView.defaultProps = {
};

/* Export Component =============================== */
export default PasswordView;
