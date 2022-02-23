import * as React from 'react';
import RootNavigator from "./navigation";
import { StatusBar, Center } from 'native-base';


function RootApp({navigation}) {
  return (
    <>
      <RootNavigator/>
    </>
  );
}

export default RootApp;
