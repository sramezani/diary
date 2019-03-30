import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Animated, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Toolbar } from 'react-native-material-ui';

// Consts and Libs
import { AppSizes, AppStyles, AppColors, AppFonts } from '@theme/';
import { Util, Action } from '@lib/';

// Components
import { Text, Touchable, Icon } from '@components/';

/* Style ========================================== */
const styles = StyleSheet.create({
    container: {
        ...AppStyles.container,
        backgroundColor: AppColors.bg
        // ...AppStyles.align_c,
    },
    textInput: {
        ...AppFonts.sm,
        backgroundColor: '#fff',
        borderRadius: Util.scale(4),
        borderWidth: 1,
        borderColor: AppColors.secondary,
        width: '100%',
        marginTop: Util.scale(10),
        padding: Util.scale(10),
        color: AppColors.textBlack,
        lineHeight: Util.scale(20)
    },
    date: {
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: AppColors.secondary,
        borderRadius: Util.scale(4),
        height: Util.scale(40),
        paddingHorizontal: Util.scale(10),
        ...AppStyles.align_c_v
    },
    bottomNav: {
        width: AppSizes.screen_width,
        height: 40,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'red'
    }
});

/* Component ====================================== */
class NoteView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDateTimePickerVisible: false,
            date: new Date(),
            title: '',
            note: ''
        };

        this._showDateTimePicker = this._showDateTimePicker.bind(this);
        this._hideDateTimePicker = this._hideDateTimePicker.bind(this);
        this._handleDatePicked = this._handleDatePicked.bind(this);
        this._submit = this._submit.bind(this);
    }

    componentDidMount() {
        if (!this.props.navigation.getParam('newNote')) {
            const index = this.props.diaries.map((itm) => { return itm.id; }).indexOf(this.props.navigation.getParam('id'));
            if (index > -1) {
                diary = this.props.diaries[index];
                this.setState({
                    date: diary.date,
                    title: diary.title,
                    note: diary.note
                });
            }
        }
    }

    _showDateTimePicker() {
        this.setState({ isDateTimePickerVisible: true });
    }

    _hideDateTimePicker() {
        this.setState({ isDateTimePickerVisible: false });
    }

    _handleDatePicked(date) {
        this.setState({ date });
        this._hideDateTimePicker();
    };

    _submit() {
        if (this.props.navigation.getParam('newNote')) {
            const data = {
                date: this.state.date,
                title: this.state.title,
                note: this.state.note
            }
            this.props.addNewDiaryAction(data);
        }
        else {
            const data = {
                date: this.state.date,
                title: this.state.title,
                note: this.state.note,
                id: this.props.navigation.getParam('id')
            }
            console.log(data);
            this.props.updateDiaryAction(data);
        }
    }

    render() {
        return (
            <View style={[styles.container, { padding: 0 }]}>
                <Toolbar
                    // centerElement="Write note"
                    centerElement={
                                    <View style={AppStyles.align_c}>
                                        <Text weight="bold" color="white">
                                            Write note
                                        </Text>
                                    </View>
                                    }
                    style={{
                        container: { backgroundColor: AppColors.primary },
                        leftElement: { color: AppColors.white }
                    }}
                    rightElement={
                        <View style={AppStyles.row}>
                            <Touchable onPress={() => this._submit()}>
                                <Icon
                                    style={{ padding: Util.scale(20), paddingLeft: Util.scale(15) }}
                                    name="check"
                                    size={25}
                                    color={AppColors.white}
                                />
                            </Touchable>
                        </View>
                    }
                    leftElement={
                        <View style={AppStyles.row}>
                            <Touchable onPress={() => Action.back()}>
                                <Icon
                                    style={{ padding: Util.scale(20), paddingLeft: Util.scale(15) }}
                                    name="arrow-back"
                                    size={25}
                                    color={AppColors.white}
                                />
                            </Touchable>
                        </View>
                    }
                />
                
                <View style={{ padding: Util.scale(10) }}>
                    <Touchable
                        onPress={this._showDateTimePicker}
                        style={styles.date}
                    >
                        <Text size="md" weight="semi_bold" color="textBlack" >
                            {moment(this.state.date).format('ll')}
                        </Text>
                    </Touchable>
                    <TextInput
                        ref={(com) => { this.title = com; }}
                        style={[styles.textInput]}
                        value={this.state.title}
                        placeholderTextColor={AppColors.darkgray}
                        placeholder="Add title"
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        blurOnSubmit={false}
                        onChangeText={title => this.setState({ title })}
                        onSubmitEditing={() => { this.note.focus(); }}
                    />
                    <TextInput
                        ref={(com) => { this.note = com; }}
                        style={[styles.textInput, { textAlignVertical: 'top', height: '60%' }]}
                        value={this.state.note}
                        placeholderTextColor={AppColors.darkgray}
                        placeholder="Start typing here..."
                        underlineColorAndroid="transparent"
                        multiline
                        blurOnSubmit={false}
                        onChangeText={note => this.setState({ note })}
                    />
                </View>
                

                {/* <View style={styles.bottomNav}>
                    <Text>
                        sdfsdf
                    </Text>
                </View> */}

                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    date={new Date(this.state.date)}
                />
            </View>
        );
    }
}

/* Props ========================================== */
NoteView.propTypes = {
    addNewDiaryAction: PropTypes.func.isRequired,
    updateDiaryAction: PropTypes.func.isRequired,
    diaries: PropTypes.array.isRequired
};

NoteView.defaultProps = {
};

/* Export Component =============================== */
export default NoteView;
