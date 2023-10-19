import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './Slice/User.slice';

export const reducers = combineReducers({
  UserAuth: userSlice.reducer,
});
