import React, {useEffect, useState} from 'react';
import {StatusBar, Platform} from 'react-native';
import {useNavigationState} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from '../pages/index';
import LoginPage from '../pages/Login';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const MainStack = createNativeStackNavigator();

const withDarkNav = (Component: React.ElementType) => {
  const ComponentWithDarkNav = (props: any) => {
    const stackIndex = useNavigationState(state => state.index);
    return (
      <SafeAreaProvider>
        <StatusBar
          barStyle={
            // On iOS 13+ keep light statusbar since the screen will be displayed in a modal with a
            // dark background.
            stackIndex > 0 &&
            Platform.OS === 'ios' &&
            parseInt(Platform.Version as string, 10) >= 13 &&
            !Platform.isPad
              ? 'light-content'
              : 'dark-content'
          }
        />
        <Component {...props} />
      </SafeAreaProvider>
    );
  };
  return ComponentWithDarkNav;
};

const withLightNav = (Component: React.ElementType) => {
  const ComponentWithLightNav = (props: any) => (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <Component {...props} />
    </SafeAreaProvider>
  );
  return ComponentWithLightNav;
};

export interface MainStackParamList extends Record<string, object | undefined> {
  Home: undefined;
  Onboarding: undefined;
  Tutorial: undefined;
}

const HomeScreenWithNavBar = withLightNav(HomeScreen);
const LoginScreenWithNavBar = withDarkNav(LoginPage);

const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  presentation: 'card',
  headerShown: false,
};

const RootNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <MainStack.Screen name="Home" component={HomeScreenWithNavBar} />
    </MainStack.Navigator>
  );
};

const Root = () => {
  const {account} = useSelector((state: RootState) => ({
    account: state.account,
  }));
  const [isLogin, setIsLogin] = useState(false);
  console.log('------index----', account);
  useEffect(() => {
    setIsLogin(!!account.token);
  }, [account]);
  return <>{isLogin ? <RootNavigator /> : <LoginPage />}</>;
};

export default Root;
