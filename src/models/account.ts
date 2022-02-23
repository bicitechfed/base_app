import {Dispatch} from '../store';
import {fetchLogin, fetchAccountInfo} from '@/apis/account';

export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export type userState = {
  account: string;
  password: string;
  token?: string;
  userInfo?: any;
};

export const account = {
  state: {
    account: '',
    password: '',
    token: '',
    userInfo: {},
  },
  reducers: {
    setUserInfo: (state: userState, userInfo: any)=>{
      return {
        ...state,
        userInfo,
      };
    },
    login: (state: userState, token: string) => {
      return {
        ...state,
        token,
      };
    },
    logout: () => {
      return {
        account: '',
        password: '',
        token: '',
        userInfo: {},
      };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async loginAsync(userInfo: userState) {
      const token = await fetchLogin(userInfo);
      dispatch.account.login(token);
      dispatch.account.getAccountInfo();
    },
    async getAccountInfo(){
      const userInfo = await fetchAccountInfo({menuType: 3, account: 'admin'});
      dispatch.account.setUserInfo(userInfo);
    },
  }),
};
