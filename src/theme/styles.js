import AppSizes from './sizes';
import Util from '../lib/Util';

export default {

    // Default
    container: {
        flex: 1,
        padding: AppSizes[10],
        flexDirection: 'column',
        position: 'relative'
    },
    fixed: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    windowSize: {
        height: AppSizes.screen_height,
        width: AppSizes.screen_width
    },

    // ==============================================================  Aligning Helpers
    align_c: { justifyContent: 'center', alignItems: 'center' },
    align_c_v: { justifyContent: 'center' },
    align_c_h: { alignItems: 'center' },
    align_t: { justifyContent: 'flex-start' },
    align_b: { justifyContent: 'flex-end' },
    align_l: { alignItems: 'flex-start' },
    align_r: { alignItems: 'flex-end' },
    text_c: { textAlign: 'center' },
    text_r: { textAlign: 'right' },
    text_l: { textAlign: 'left' },

    // ============================================================== Text Helpers
    shadowSize: {
        sm: {
            textShadowOffset: { width: Util.scale(0.5), height: Util.scale(0.5) },
            textShadowRadius: Util.scale(1)
        },
        md: {
            textShadowOffset: { width: Util.scale(1), height: Util.scale(1) },
            textShadowRadius: Util.scale(2)
        }
    },

    // ============================================================== Margin helpers

    // Grid
    row: { flexDirection: 'row' },
    row_rtl: { flexDirection: 'row-reverse' }
};
