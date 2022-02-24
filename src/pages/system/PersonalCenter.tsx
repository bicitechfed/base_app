import React, { useEffect } from 'react';
import {View, FlatList, Button} from 'native-base';
import {
  Pressable,
  VStack,
  Center,
  ScrollView,
  Heading,
  Container,
  Text,
  Stack,
  Box,
  HStack,
  Spacer,
  Avatar,
} from 'native-base';
import IconFont from '../../icons';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../../store';
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

const PersonalCenter = ({navigation}) => {
  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return <IconFont name="icon-danxuan-weixuanzhong" />;
      },
      headerLeft: () => {
        return <HeaderLeftBack navigation={navigation} />;
      },
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  },[navigation])

  const {account, global, model, effect} = useSelector((state: RootState) => ({
    account: state.account,
  }));
  const dispatch = useDispatch<Dispatch>();

  const {
    userInfo: {deptName, name, account: userName, email, phone, roleName},
  } = account;
  const handleLogout = () => {
    dispatch.account.logout();
  };

  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: '用户账号',
      timeStamp: userName,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: '所属部门',
      timeStamp: deptName,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: '手机号',
      timeStamp: phone,
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: '邮箱',
      timeStamp: email,
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: '所属角色',
      timeStamp: roleName,
    },
  ];

  return (
    <VStack space={4} alignItems="center" marginTop={20}>
      <Center
        w="96%"
        h="90%"
        bg="light.50"
        rounded="md"
        paddingX={0}
        shadow={1}>
        <Box paddingX={0} bg="red">
          <Heading fontSize="xl" p="4" pb="3">
            ZHSD数字化工厂
          </Heading>
          <Box pl="4">
            <Heading>{name}</Heading>
          </Box>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: 'gray.600',
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2">
                <HStack space={20} justifyContent="space-between">
                  <VStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="trueGray.400"
                      bold>
                      {item.fullName}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text
                    fontSize="xs"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    alignSelf="flex-start">
                    {item.timeStamp}
                  </Text>
                </HStack>
              </Box>
            )}
            keyExtractor={item => item.id}
          />
          <Button
            size="sm"
            variant="outline"
            marginBottom={4}
            colorScheme="trueGray"
            onPress={handleLogout}>
            退出登录
          </Button>
        </Box>
      </Center>
    </VStack>
  );
};

export default PersonalCenter;
