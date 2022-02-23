import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  extendTheme,
  NativeBaseProvider,
} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './src/store';
import RootApp from './src';
import {RootSiblingParent} from 'react-native-root-siblings';
import Tips from 'react-native-root-toast-tips';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Linking, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

// 1. Import the extendTheme function
// 2. Extend the theme to include custom colors, fonts, etc
// 3. Pass the `theme` prop to the `NativeBaseProvider`

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({colors: newColorTheme});

Tips.setDefaultOptions({
  showLoading: true,
  backgroundColor: '#000000',
  opacity: 0.95,
  textColor: 'white',
  //
  // // setting image you like
  // imageLoading: require('xxxxxxxxxx'),
  // imageSuccess: require('xxxxxxxxxx'),
  // imageFail: require('xxxxxxxxxx'),
  // imageInfo: require('xxxxxxxxxx'),
  // imageWarn: require('xxxxxxxxxx'),
});

function App() {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();
  useEffect(() => {
    SplashScreen.hide();

    /** State persistence**/
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);
  if (!isReady) {
    return null;
  }
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer
            initialState={initialState}
            onStateChange={state =>
              AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
            }>
            <RootApp />
            <StatusBar backgroundColor="transparent" translucent />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </RootSiblingParent>
  );
}

export default App;
