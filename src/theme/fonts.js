import { Platform } from 'react-native';
import AppColors from './colors';
import Util from '@lib/Util';

const base = {
    fontSize: Util.scale(14),
    fontWeight: '400',
    color: AppColors.text.default,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    ...Platform.select({
        ios: {
            fontFamily: 'Roboto'
        },
        android: {
            fontFamily: 'Roboto'
        }
    })
};

/* eslint-disable */
export default {
    base: base,

    xxlg: { fontSize: Util.scale(28), lineHeight: Util.scale(30) },
	xlg : { fontSize: Util.scale(22), lineHeight: Util.scale(24) },
	lg  : { fontSize: Util.scale(19), lineHeight: Util.scale(21) },
	md  : { fontSize: Util.scale(16), lineHeight: Util.scale(18) },
	sm  : { fontSize: Util.scale(14), lineHeight: Util.scale(16) },
	xs  : { fontSize: Util.scale(12) , lineHeight: Util.scale(14) },

	ultra_bold: '900',
	bold: '700',
	semi_bold: '500',
	normal: '400',
};
/* eslint-enable */
