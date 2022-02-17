import {Dispatch} from '../store';
import {fetchLogin} from '@/apis/account';

export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export type userState = {
  account: string;
  password: string;
  token?: string;
};

export const account = {
  state: {
    account: '',
    password: '',
    token: '',
  },
  reducers: {
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
      };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async loginAsync(userInfo: userState) {
      console.log('loginAsync', userInfo);
      const token = await fetchLogin(userInfo);
      console.log('token>>>', token);
      dispatch.account.login(token);
    },
  }),
};
