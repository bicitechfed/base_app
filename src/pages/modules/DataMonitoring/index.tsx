import React from "react";
import {View, Text, Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Heading, ScrollView} from 'native-base';
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';

  function CustomDrawerContent({navigation, routes}) {
     console.log('props>>>>', navigation, routes);
    return (
      <ScrollView>
        <View>
            {
                [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4].map((item,key)=>{
                    return <Heading key={key}>啊啊啊</Heading>
                })
            }
        </View>
      </ScrollView>
    );
  }

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

// https://reactnavigation.org/docs/drawer-navigator#installation

export default function DataRealTimeMonitor({navigation: rootNavigation}) {
  return (
      <Drawer.Navigator initialRouteName="Home" drawerContent={CustomDrawerContent} screenOptions={{
        headerShown: false,
        drawerStyle: { width: '80%'},
        drawerHideStatusBarOnOpen: false,
        swipeEdgeWidth: 200,
        unmountOnBlur: true,
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabel: 'Home' }}/>
        <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{ drawerLabel: 'Notifications' }}/>
      </Drawer.Navigator>
  );
}
