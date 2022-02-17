import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  ScrollView,
} from 'native-base';
import {TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../../store';
import {useForm, Controller} from 'react-hook-form';
import {tranRSA} from '@/utils/common';

export const LoginPage = ({navigation}) => {
  const {account, global, model, effect} = useSelector((state: RootState) => ({
    account: state.account,
    global: state.loading.global,
    model: state.loading.models.sharks,
    effect: state.loading.effects.sharks.incrementAsync,
  }));
  const dispatch = useDispatch<Dispatch>();
  /**登录表单验证开始*/
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      account: 'admin',
      password: '123',
    },
  });

  /**处理登录按钮**/
  const onSubmit = data => {
    dispatch.account.loginAsync({
      account: data.account,
      password: tranRSA(data.password),
    });
    console.log('data>>>', data);
  };

  console.log('errors', errors);
  /**登录表单验证结束*/

  return (
    <ScrollView
      _contentContainerStyle={{
        px: '20px',
        mb: '4',
        minW: '72',
      }}>
      <Center flex={1} px="3">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            欢迎使用中航上大
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs">
            请先登录继续使用!
          </Heading>

          <VStack space={3} mt="5">
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  {...register('account', {
                    maxLength: {value: 12, message: '最大长度2'},
                  })}
                />
              )}
              name="account"
              rules={{required: true}}
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  type="password"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="password"
              rules={{required: true}}
            />
            <Button
              mt="2"
              colorScheme="indigo"
              onPress={handleSubmit(onSubmit)}>
              登录
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                我是新用户.{' '}
              </Text>
              <Link
                _text={{
                  color: 'indigo.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                href="#">
                注册
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default LoginPage;
