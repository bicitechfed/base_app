import * as React from 'react';
import {View, Button, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  extendTheme,
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
} from 'native-base';

import {Provider} from 'react-redux';
import {store} from './src/store';
import RootApp from './src';
import {RootSiblingParent} from 'react-native-root-siblings';
import Tips from 'react-native-root-toast-tips';
import LoginPage from './src/pages/Login';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

function DetailsScreen() {
  return (
    <Box
      bg="primary.600"
      py="4"
      px="3"
      rounded="md"
      alignSelf="center"
      width={375}
      maxWidth="100%">
      <HStack justifyContent="space-between">
        <Box justifyContent="space-between">
          <VStack space="2">
            <Text fontSize="sm" color="white">
              Today @ 9PM
            </Text>
            <Text color="white" fontSize="lg">
              Let's talk about avatar!
            </Text>
          </VStack>
          <Pressable
            rounded="sm"
            bg="primary.400"
            alignSelf="flex-start"
            py="4"
            px="3">
            <Text
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="white">
              Remind me
            </Text>
          </Pressable>
        </Box>
        <Image
          source={{
            uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
          }}
          alt="Aang flying and surrounded by clouds"
          height="100"
          rounded="full"
          width="100"
        />
      </HStack>
    </Box>
  );
}

const Stack = createNativeStackNavigator();
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
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <RootApp />
            <StatusBar backgroundColor="transparent" translucent />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </RootSiblingParent>
  );
}

export default App;
