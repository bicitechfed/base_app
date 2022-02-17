import {Button, View, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, Dispatch} from '../store';
import {useToast, Center, NativeBaseProvider} from 'native-base';
import Tips from 'react-native-root-toast-tips';
import IconFont from '../icons';

function MainScreen({navigation}: any) {
  console.log('navigation', navigation);
  const {sharks, global, model, effect} = useSelector((state: RootState) => ({
    sharks: state.sharks.count,
    global: state.loading.global,
    model: state.loading.models.sharks,
    effect: state.loading.effects.sharks.incrementAsync,
  }));
  console.log('sharks....', sharks);
  const dispatch = useDispatch<Dispatch>();
  const toast = useToast();

  const addAsync = () => {
    // Tips.show('数据加载中...', {
    //   mask: true,
    //   showLoading: true,
    //   maskColor: 'gray',
    // });
    // toast.show({
    //     description: "Hello world",
    // });
    dispatch.sharks.incrementAsync(2);
    dispatch.account.logout();
    // dispatch.sharks.increment(2);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Text>{sharks}</Text>
      <Text>{global}</Text>
      <Text>{model}</Text>
      <Text>{effect}</Text>
      <IconFont name="icon-danxuan-xuanzhong" />
      <Button title="add" onPress={addAsync} color="#f194ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
  },
});

export default MainScreen;
