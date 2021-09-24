import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Types from '../types/types';
import { createRoutine } from 'redux-saga-routines';

export const signInRoutine = createRoutine('SIGN_IN_ROUTINE');
export const signUpRoutine = createRoutine('SIGN_UP_ROUTINE');

interface UserSliceState {
  user: Types.User | null;
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
    logOut(state) {
      state.user = null;
      state.token = '';
      state.isAuth = false;
      state.errors = '';
    },
  },
  extraReducers: {
    [signInRoutine.TRIGGER]: (state, action) => {
      state.isLoading = true;
      state.errors = '';
    },
    [signInRoutine.SUCCESS]: (
      state,
      { payload }: PayloadAction<{ accessToken: string; user: Types.User }>
    ) => {
      console.log(payload);
      state.token = payload.accessToken;
      state.user = { ...payload.user };
      state.isAuth = true;
      state.isLoading = false;
    },
    [signUpRoutine.TRIGGER]: (state, action) => {
      state.isLoading = true;
    },
    [signUpRoutine.SUCCESS]: (
      state,
      { payload }: PayloadAction<{ accessToken: string; user: Types.User }>
    ) => {
      state.token = payload.accessToken;
      state.user = { ...payload.user };
      state.isAuth = true;
      state.isLoading = false;
    },
  },
});

export const { requestFailed, cleanErrors, logOut } = userSlice.actions;

export default userSlice.reducer;
