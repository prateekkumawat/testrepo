import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserAuth {
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  isAdmin: boolean;
}

const initialState = {
  name: '',
  email: '',
  accessToken: '',
  refreshToken: '',
  isAdmin: false,
};
export const userSlice = createSlice({
  name: 'UserAuth',
  initialState: {
    value: {
      ...initialState,
    },
  },
  reducers: {
    updateUserAuth: (state: any, action: PayloadAction<Partial<UserAuth>>) => {
      // eslint-disable-next-line no-param-reassign
      state.value = { ...state?.value, ...action.payload };
    },
    login: (state: any, action: PayloadAction<UserAuth>) => {
      // eslint-disable-next-line no-param-reassign
      state.value = {
        name: '',
        email: action?.payload?.email,
        accessToken: action?.payload?.accessToken,
        refreshToken: action?.payload?.refreshToken,
        isAdmin: false, // TODO: process the toke
      };
    },
    logout: (state: any) => {
      console.log('state', state);
      // eslint-disable-next-line no-param-reassign
      state.value = { ...initialState };
    },
  },
});

export const { updateUserAuth, login, logout } = userSlice.actions;
export const UserAuthSelector = (state: any): UserAuth => state.UserAuth?.value;
