import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, FlatList, Image, ImageBackground } from 'react-native';
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
        paddingBottom: 0,
        backgroundColor: AppColors.bg
    },
    diaryBtn: {
        position: 'absolute',
        right: Util.scale(20),
        ...AppStyles.align_c,
        width: Util.scale(60),
        height: Util.scale(60),
        bottom: Util.scale(20),
        borderRadius: Util.scale(60),
        borderWidth: 0.7,
        borderColor: AppColors.primaryDark,
        backgroundColor:  AppColors.primary,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: Util.scale(2) },
        shadowOpacity: 0.5,
        shadowRadius: 4
    },
    image: {
        width: AppSizes.screen_width,
        height: Util.scale(80),
        resizeMode: 'contain',
        marginBottom: Util.scale(10)
    },
    arrowImage: {
        width: AppSizes.screen_width,
        height: Util.scale(170),
        resizeMode: 'contain'
    },
    empty: {
        ...AppStyles.align_c,
        marginBottom: Util.scale(90)
        // backgroundColor: 'red',

    }
});

/* Component ====================================== */
class MainPageView extends React.Component {
    constructor(props) {
        super(props);

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
                onDiaryPress={() => {
                    Action.navigate('Note', {
                                            newNote: false,
                                            id: item.id
                                        });
                                    }
                            }
            />
        );
    }

    render() {
        const sortedDiaries = [...this.props.diaries].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        return (

                <ImageBackground
                    source={require('@images/bg.png')}
                    blurRadius={4}
                    style={[styles.container, { width: AppSizes.screen_width, height: '100%', resizeMode: 'cover' }]}
                >

                    <View style={{ width: AppSizes.screen_width }}>
                        <Image source={require('@images/top-border.png')} style={styles.image} />
                    </View>
                    
                    <FlatList
                        ref={(ref) => {
                            this.flatList = ref;
                        }}
                        contentContainerStyle={[{ paddingBottom: Util.scale(90) }]}
                        data={sortedDiaries}
                        numColumns={1}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}

                        removeClippedSubviews
                        initialNumToRender={15}
                        maxToRenderPerBatch={15}
                        updateCellsBatchingPeriod={15}
                        windowSize={15}
                    />

                    {
                        sortedDiaries.length < 1 &&
                            <View style={styles.empty}>
                                <Text color="primary" size="xlg" weight="bold">
                                    write your diary
                                </Text>
                                <Image source={require('@images/arrow.png')} style={styles.arrowImage} />
                            </View>
                    }

                    <Touchable
                        style={[styles.diaryBtn]}
                        activeOpacity={0.9}
                        onPress={() => Action.navigate('Note', { newNote: true })}
                    >
                        <Icon
                            style={{ marginHorizontal: Util.scale(5) }}
                            name='create'
                            size={Util.scale(25)}
                            color={AppColors.white}
                        />
                    </Touchable>

                </ImageBackground>
        );
    }
}

/* Props ========================================== */
MainPageView.propTypes = {
    diaries: PropTypes.array.isRequired
};

MainPageView.defaultProps = {
};

/* Export Component =============================== */
export default MainPageView;
