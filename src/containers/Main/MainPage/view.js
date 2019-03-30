import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

// Consts and Libs
import { AppSizes, AppStyles, AppColors } from '@theme/';
import { Util, Action } from '@lib/';

// Components
import { Text, Touchable, Icon, AbstractBox } from '@components/';

/* Style ========================================== */
const styles = StyleSheet.create({
    container: {
        ...AppStyles.container,
        ...AppStyles.align_c,
    },
    diaryBtn: {
        position: 'absolute',
        right: Util.scale(20),
        ...AppStyles.align_c,
        width: Util.scale(60),
        height: Util.scale(60),
        bottom: Util.scale(20),
        borderRadius: Util.scale(60),
        borderWidth: 1,
        borderColor: AppColors.primary,
        backgroundColor:  AppColors.primary,
        elevation: 5,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: Util.scale(2) },
        shadowOpacity: 0.5,
        shadowRadius: 1
    },
});

/* Component ====================================== */
class MainPageView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    date: '1976-04-19T12:59-0500',
                    title: 'sdf sdf sdf sd gtr bgzvv ljirg xlfvjire dsflfds dsflkj dsglkndsf',
                    note: 'nhj mkdfsv fdjore vs kjfds dcvlijdsf dflkvfd dfjkvnfd dfvjkfdjisdf fdskjsdfklhsdfjk dsfkjndsfkljlfdsk dfkgjnkfldjglsdfg fdslkjlf fglkjfg gjjtutr gjf gfjdf dfkjndfgbn gfdkjfdgl fdjkdf'
                },
                {
                    date: '1976-04-19T12:59-0500',
                    title: 'sdf sdf sdf sd gtr bgzvv ljirg xlfvjire dsflfds dsflkj dsglkndsf',
                    note: 'nhj mkdfsv fdjore vs kjfds dcvlijdsf dflkvfd dfjkvnfd dfvjkfdjisdf fdskjsdfklhsdfjk dsfkjndsfkljlfdsk dfkgjnkfldjglsdfg fdslkjlf fglkjfg gjjtutr gjf gfjdf dfkjndfgbn gfdkjfdgl fdjkdf'
                }
            ]
        };

        this._renderItem = this._renderItem.bind(this);
    }

    componentDidMount() {
        
    }

    _renderItem({ item, i }) {
        return (
            <AbstractBox
                date={item.date}
                title={item.title}
                note={item.note}
            />
            // <View key={i} style={{ width: AppSizes.screen_width - Util.scale(20), minHeight: 50, padding: 10, borderWidth:1, borderColor: '#cfcfcf', borderRadius: 3 }}>
            //     <View style={[AppStyles.row, { flex: 1 }]}>
            //         <View style={{ flex: 3, paddingRight: 7 }}>
            //             <Text numberOfLines={1} size="sm" weight="bold" color="textBlack">
            //                 {item.title}
            //             </Text>
            //         </View>
            //         <View style={{ flex: 1 }}>
            //             <Text size="xs" color="textBlack">
            //                 {moment(item.date).format('ll')}
            //             </Text>
            //         </View>
            //     </View>
            //     <View style={{ flex: 2, marginTop: 5 }}>
            //         <Text numberOfLines={3} size="sm" color="textBlack">
            //             {item.note}
            //         </Text>
            //     </View>
            // </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>MainPage</Text> */}

                <FlatList
                    ref={(ref) => {
                        this.flatList = ref;
                    }}
                    data={this.state.data}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}

                    removeClippedSubviews
                    initialNumToRender={15}
                    maxToRenderPerBatch={15}
                    updateCellsBatchingPeriod={15}
                    windowSize={15}
                />

                <Touchable
                    style={[styles.diaryBtn]}
                    activeOpacity={0.9}
                    onPress={() => Action.navigate('Note')}
                >
                    <Icon
                        style={{ marginHorizontal: Util.scale(5) }}
                        name='create'
                        size={Util.scale(25)}
                        color={AppColors.white}
                    />
                </Touchable>

            </View>
        );
    }
}

/* Props ========================================== */
MainPageView.propTypes = {
};

MainPageView.defaultProps = {
};

/* Export Component =============================== */
export default MainPageView;
