// import {createModel} from '@rematch/core';
import {delay} from '../utils';
// import {RootModel} from './index';

export const sharks = {
  state: {
    count: 0,
  },
  reducers: {
    increment: (state: any, payload: number) => {
      state.count = state.count + payload;
      return state;
    },
  },
  effects: (dispatch: any) => ({
    async incrementAsync(payload: number) {
      await delay(5000);
      dispatch.sharks.increment(payload);
    },
    async login(payload: any) {
      const a = await delay(2500);
      return {
        a: 0,
      };
    },
  }),
};
