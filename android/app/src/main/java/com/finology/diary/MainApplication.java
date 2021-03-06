package com.finology.diary;

// import android.support.multidex.MultiDexApplication;
import android.app.Application;


import com.facebook.react.ReactApplication;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;

import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  	private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
		@Override
		public boolean getUseDeveloperSupport() {
			return BuildConfig.DEBUG;
		}

		@Override
		protected List<ReactPackage> getPackages() {
			return Arrays.<ReactPackage>asList(
				new MainReactPackage(),
            new RNGestureHandlerPackage(),
            	new VectorIconsPackage(),
            	new LinearGradientPackage(),
				new FastImageViewPackage(),
				new RNDeviceInfo()
			);
		}
    
    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
	};

	@Override
	public ReactNativeHost getReactNativeHost() {
		return mReactNativeHost;
	}

	@Override
	public void onCreate() {
		I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
		sharedI18nUtilInstance.allowRTL(getApplicationContext(), false);
		super.onCreate();
		SoLoader.init(this, /* native exopackage */ false);
	}
}
