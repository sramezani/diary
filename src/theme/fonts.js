import { Platform } from 'react-native';
import AppColors from './colors';
import Util from '@lib/Util';

const base = {
    fontSize: Util.scale(14),
    fontWeight: '400',
    color: AppColors.text.black,
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
    base,

    xxlg: { ...base, fontSize: Util.scale(28) },
	xlg : { ...base, fontSize: Util.scale(22) },
	lg  : { ...base, fontSize: Util.scale(19) },
	md  : { ...base, fontSize: Util.scale(16) },
	sm  : { ...base, fontSize: Util.scale(14) },
    xs  : { ...base, fontSize: Util.scale(12) },
    xxs : { ...base, fontSize: Util.scale(10) },
    xxxs: { ...base, fontSize: Util.scale(9) },
    vs  : { ...base, fontSize: Util.scale(7) },

	ultra_bold: '900',
	bold: '700',
	semi_bold: '500',
	normal: '400',
};
/* eslint-enable */
