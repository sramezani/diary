/**
 * App Theme - Sizes
 *
 * */
import { Dimensions } from 'react-native';
import Util from '../lib/Util';

const { width, height } = Dimensions.get('window');

export default {
    // Window Dimensions
    screen_height: height,
    screen_width: width,

    // border
    borderRadius: 2,
    
    // defaults
    asidePadding: Util.scale(10),

    // responsive size
    5: Util.scale(5),
    10: Util.scale(10),
    15: Util.scale(15),
    20: Util.scale(20),
    25: Util.scale(25),
    30: Util.scale(30),
    35: Util.scale(35),
    40: Util.scale(40),
    45: Util.scale(45),
    50: Util.scale(50),
    55: Util.scale(55),
    60: Util.scale(60),

};
