import DeviceInfo from 'react-native-device-info';

/**
 * Global App Config
 *
 * */

export default {
    appVersion: DeviceInfo.getVersion(),
    appName: 'Diary'
};
