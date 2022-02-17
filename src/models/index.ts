import {account} from './account';
import {utils} from './utils';
import {sharks} from './sharks';

export type RootModel = {
  account: typeof account;
  utils: typeof utils;
  sharks: typeof sharks;
};

export const models: RootModel = {
  account,
  utils,
  sharks,
};
