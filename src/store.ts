import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import createLoadingPlugin, {LoadingConfig} from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import selectPlugin from '@rematch/select';
import storage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';
import {RootModel, models} from './models';

const options: LoadingConfig = {type: 'number'};
// redux日志
const logger = createLogger({
  predicate: () => __DEV__,
  collapsed: true,
  duration: true,
});
const loading = createLoadingPlugin(options);
// 存储插件
const persistPlugin = createRematchPersist({
  key: 'app',
  whitelist: ['account'],
  storage,
  throttle: 5000,
  version: 1,
});
const reselectPlugin = selectPlugin();

export const store = init({
  models,
  redux: {
    middlewares: [logger],
  },
  plugins: [loading, persistPlugin, reselectPlugin],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
// loadin插件
interface ILoadingPlugin {
  loading: {
    models: RematchRootState<typeof models>;
    effects: Dispatch;
  };
}
export type iRootState = RematchRootState<RootModel> & ILoadingPlugin;
