import {} from 'native-base';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, Dispatch} from '../store';
import {
  useToast,
  Center,
  NativeBaseProvider,
  Text,
  ScrollView,
  Heading,
  VStack,
  useTheme,
  HStack,
  Stack,
  Box,
  Pressable,
} from 'native-base';
import Tips from 'react-native-root-toast-tips';
import IconFont from '../icons';

const HomeHeaderRight = ({navigation})=>{
  const openPersonalCenter = ()=>{
    navigation.navigate('PersonalCenter')
  }
    return (
      <Pressable onPress={openPersonalCenter}>
        <IconFont name="icon-user2" color="#fff"/>
      </Pressable>
    )
}



function MainScreen({navigation}: any) {
  console.log('navigation', navigation);
  navigation.setOptions({
    headerRight: () => {
      return <HomeHeaderRight navigation={navigation}/>;
    },
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });
  const {sharks, global, model, effect} = useSelector((state: RootState) => ({
    sharks: state.sharks.count,
    global: state.loading.global,
    model: state.loading.models.sharks,
    effect: state.loading.effects.sharks.incrementAsync,
  }));
  console.log('sharks....', sharks);
  const dispatch = useDispatch<Dispatch>();
  const toast = useToast();
  const {colors} = useTheme();

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
    <Center>
      <ScrollView
        w="100%"
        _contentContainerStyle={{
          px: '20px',
          mb: '4',
          minW: '72',
        }}>
        <VStack marginTop={4} space={4}>
          <Box bg="light.50" paddingY={2} paddingX={2} rounded={2}>
            <Heading
              size="sm"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}>
              设备信息
            </Heading>
            <Stack direction="row" mb="2.5" mt="1.5" space="3" flexWrap="wrap">
              {[1, 2, 3, 4, 5, 6, 7, , 8, 9].map(item => {
                return (
                  <Pressable onPress={() => console.log("I'm Pressed")}>
                    {({isPressed}) => {
                      return (
                        <Center
                          bg="light.50"
                          size={16}
                          shouldRasterizeIOS={false}
                          style={{
                            transform: [
                              {
                                scale: isPressed ? 0.96 : 1,
                              },
                            ],
                          }}
                          _text={{
                            color: 'gray.900',
                            fontWeight: 'medium',
                          }}>
                          <IconFont name="icon-logo-apple-filled" size={24} />
                          运维监控1
                        </Center>
                      );
                    }}
                  </Pressable>
                );
              })}
            </Stack>
          </Box>
          <Box bg="light.50" paddingY={2} paddingX={2} rounded={2}>
            <Heading
              size="sm"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}>
              巡检维修
            </Heading>
            <Stack direction="row" mb="2.5" mt="1.5" space={4}>
              <Center
                size="16"
                bg="light.50"
                _text={{
                  color: 'gray.900',
                  fontWeight: 'medium',
                }}>
                <IconFont name="icon-shanchu" size={24} />
                点巡检
              </Center>
              <Center
                size="16"
                bg="light.50"
                _text={{
                  color: 'gray.900',
                  fontWeight: 'medium',
                }}>
                <IconFont name="icon-shanchu" size={24} />
                维保定修
              </Center>
              <Center
                size="16"
                bg="light.50"
                _text={{
                  color: 'gray.900',
                  fontWeight: 'medium',
                }}>
                <IconFont name="icon-shanchu" size={24} />
                外围检修
              </Center>
              <Center
                size="16"
                bg="light.50"
                _text={{
                  color: 'gray.900',
                  fontWeight: 'medium',
                }}>
                <IconFont name="icon-shanchu" size={24} />
                运维监控
              </Center>
            </Stack>
          </Box>
        </VStack>
      </ScrollView>
    </Center>
  );
}

export default MainScreen;
