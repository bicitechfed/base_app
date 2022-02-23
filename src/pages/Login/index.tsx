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
  Icon,
  Select,
} from 'native-base';
import {TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../../store';
import {useForm, Controller} from 'react-hook-form';
import {tranRSA} from '@/utils/common';
import IconFont from '../../icons';

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
      password: '123456',
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
                  w={{base: '100%', md: '25%'}}
                  InputLeftElement={<Icon as={<IconFont name="icon-guanbi" color="red" />}/>}
                  placeholder="Name"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  isInvalid={true}
                  isDisabled={false}
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
                  InputLeftElement={<Icon as={<IconFont name="icon-guanbi" color="red" />}/>}
                  InputRightElement={<Icon as={<IconFont name="icon-guanbi" color="red" />}/>}
                />
              )}
              name="password"
              rules={{required: true}}
            />
            <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" mt={1}>
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
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
