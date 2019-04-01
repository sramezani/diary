import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ScrollView, Image, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Pages } from 'react-native-pages';
import moment from 'moment';

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
    },
    image: {
        width: AppSizes.screen_width,
        height: '100%',
        resizeMode: 'cover'
        // marginBottom: Util.scale(10)
    },
    hr: {
        borderWidth: 0.6,
        borderColor: AppColors.grey,
        width: '80%',
        left: '10%',
        borderStyle: 'dashed',
        borderRadius : 1,
        marginVertical: Util.scale(10)
    }
});

/* Component ====================================== */
class DiaryBookView extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        
    }

    render() {
        const sortedDiaries = [...this.props.diaries].sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        return (
            <Pages
                indicatorPosition="none"
            >
                <View style={{ width: AppSizes.screen_width }}>
                    <Image source={require('@images/diary-cover2.jpg')} style={styles.image} />
                    {
                        sortedDiaries.length < 1 &&
                            <View style={{ position: 'absolute', top: '50%', left: '20%' }}>
                                <Text color="white" size="lg" weight="bold">
                                    your diary book is empty
                                </Text>
                                <Text color="white" size="md" style={{ marginTop: Util.scale(5) }}>
                                    write your mind
                                </Text>
                            </View>
                    }
                </View>
                {sortedDiaries.map((item, i) => (
                    <View key={i} style={{ width: AppSizes.screen_width }} >
                        <ImageBackground
                            source={require('@images/page1.png')}
                            style={[styles.image, { paddingHorizontal: Util.scale(55), paddingVertical: Util.scale(60) }]}
                        >
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                // contentContainerStyle={{ padding: Util.scale(50) }}
                            >
                                <View>
                                    <Text size="xs" color="primary">
                                        {moment(item.date).format('ddd, ll')}
                                    </Text>
                                </View>
                                <View style={{ marginTop: Util.scale(5) }}>
                                    <Text size="lg" weight="bold" color="textBlack" style={AppStyles.text_l}>
                                        {item.title}
                                    </Text>
                                </View>
                                <View style={styles.hr} />
                                <View >
                                    <Text size="sm" color="textBlack" style={AppStyles.text_l}>
                                        {item.note}
                                    </Text>
                                </View>

                            </ScrollView>
                        </ImageBackground>

                        
                    </View>
                ))}
            </Pages>
        );
    }
}

/* Props ========================================== */
DiaryBookView.propTypes = {
    diaries: PropTypes.array.isRequired
};

DiaryBookView.defaultProps = {
};

/* Export Component =============================== */
export default DiaryBookView;
