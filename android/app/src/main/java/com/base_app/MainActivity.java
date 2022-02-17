package com.base_app;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.content.Intent; // <--- import
import android.content.res.Configuration; // <--- import
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "base_app";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // 显示启动屏，第二个参数是我们自定义主题的引用 ,第二个参数会报错，需要解决
//     SplashScreen.show(this, R.style.SplashScreenTheme, true);
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }
  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    Intent intent = new Intent("onConfigurationChanged");
    intent.putExtra("newConfig", newConfig);
    this.sendBroadcast(intent);
  }
}
