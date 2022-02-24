import React from 'react';
import Home from '@/pages/';
import IconFont from '../icons';
import {View} from 'react-native';
import {Pressable} from 'native-base';

import DataRealTimeMonitor from '../pages/modules/DataMonitoring';
import PointInspection from '../pages/modules/PointInspection';
import PersonalCenter from '../pages/system/PersonalCenter';
import { useNavigation } from '@react-navigation/native';

const HeaderLeftBack = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <Pressable onPress={handlePress}>
      <IconFont name="icon-arrow-left" color="#fff" />
    </Pressable>
  );
};

/**导出路由信息**/
export const routes = [
  {
    text: '首页',
    icon: <IconFont name="icon-shanchu" />,
    name: 'Home',
    title: '首页',
    component: Home,
    show: false,
    headerLeft: () => <View />,
    headerRight: () => <View />,
  },
];

// 点检定修路由配置
export const pointInspectionRoutes = [
  {
    text: '点巡检',
    icon: <IconFont name="icon-shanchu" />,
    name: 'PointInspection',
    title: '点巡检',
    component: PointInspection,
    show: false,
    headerLeft: () => <View />,
    headerRight: () => <View />,
  },
];
// 数据实时监控模块路由配置
export const dataRealTimeRoutes = [
  {
    text: '数据实时监控',
    icon: <IconFont name="icon-shanchu" />,
    name: 'DataRealTimeMonitor',
    title: '数据实时监控',
    component: DataRealTimeMonitor,
    show: false,
    headerLeft: () => <HeaderLeftBack/>,
    headerRight: () => <View />,
  },
];

export const modalRoutes = [
  {
    text: '个人中心',
    icon: <IconFont name="icon-shanchu" />,
    name: 'PersonalCenter',
    title: '个人中心',
    component: PersonalCenter,
    show: false,
    headerLeft: () => <View />,
    headerRight: () => <View />,
  },
]

export const rootRoutes = [
  ...routes,
  ...pointInspectionRoutes,
  ...dataRealTimeRoutes,
];
