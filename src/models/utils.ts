type ToastState = {
  text: string;
  timeout?: number;
  id?: number;
  iconName?: string;
};
type tokenState = {
  id: number;
  invalid: boolean;
};
export type UtilsState = {
  toast: ToastState;
  token: tokenState;
  showSpinnerOverlay: boolean;
};

export const utils = {
  state: {
    toast: {
      text: '',
      timeout: 2000,
      id: null,
      iconName: null,
    },
    token: {
      id: null,
      invalid: false,
    },
    showSpinnerOverlay: false,
  },
  reducers: {
    show(state: UtilsState, payload: ToastState) {
      return {
        ...state,
        toast: {
          ...state.toast,
          id: Date.now(),
          ...payload,
          iconName: payload.iconName,
        },
      };
    },
    showLoading(state: UtilsState) {
      return {
        ...state,
        showSpinnerOverlay: true,
      };
    },
    hideLoading(state: UtilsState) {
      return {
        ...state,
        showSpinnerOverlay: false,
      };
    },
    invalidToken(state: UtilsState) {
      return {
        ...state,
        tokenInvalid: {
          invalid: true,
          id: Date.now(),
        },
      };
    },
  },
  effects: () => ({}),
};
