import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Types from '../types/types';
import { createRoutine } from 'redux-saga-routines';

export const signInRoutine = createRoutine('SIGN_IN_ROUTINE');
export const signUpRoutine = createRoutine('SIGN_UP_ROUTINE');

interface UserSliceState {
  user: Types.User;
  token: string;
  isAuth: boolean;
  isLoading: boolean;
  errors: string;
}

const initialState: UserSliceState = {
  user: {
    id: '',
    email: '',
    createdAt: '',
    firstName: '',
    lastName: '',
    loggedInAt: '',
    role: '',
    teamId: '',
    updatedAt: '',
    imported: false,
    isAuthorized: false,
    isReceivingNotifications: false,
  },
  token: '',
  isAuth: false,
  isLoading: false,
  errors: '',
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    cleanErrors(state) {
      state.errors = '';
    },
    requestFailed(state, { payload }: PayloadAction<string>) {
      state.errors = payload;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [signInRoutine.TRIGGER]: (state, action) => {
      state.isLoading = true;
    },
    [signInRoutine.SUCCESS]: (state, { payload }) => {
      console.log(payload);
      state.token = payload.accessToken;
      state.user = { ...payload.user };
      state.isAuth = true;
      state.isLoading = false;
      console.log(state.user);
    },
    [signUpRoutine.TRIGGER]: (state, action) => {
      state.isLoading = true;
    },
    [signUpRoutine.SUCCESS]: (state, { payload }) => {
      return (
        payload.token && {
          user: { ...payload },
          isAuth: true,
          isLoading: false,
        }
      );
    },
  },
});

export const { requestFailed, cleanErrors } = userSlice.actions;

export default userSlice.reducer;
