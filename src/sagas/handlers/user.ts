import { signIn, signUp } from './../requests/user';
import { call, put } from 'redux-saga/effects';
import * as Types from '../../types/types';
import { SagaIterator } from 'redux-saga';
import {
  requestFailed,
  signInRoutine,
  signUpRoutine,
} from '../../store/userSlice';
import { PayloadAction } from '@reduxjs/toolkit';

export function* signUpRequestHandler({ payload }: any): SagaIterator {
  try {
    const { data, ...responseInfo } = yield call(signUp, { ...payload });
    console.log({ data, ...responseInfo });
    if (responseInfo.status !== 200 && data.message) {
      console.log({ data, ...responseInfo });
      yield put(requestFailed(data.message));
      return;
    }
    yield put(signUpRoutine.success({ ...data }));
  } catch (e: any) {
    console.log(e.response.data);
  }
}
export function* signInRequestHandler({ payload }: any): SagaIterator {
  try {
    const { data, ...responseInfo } = yield call(signIn, { ...payload });
    if (responseInfo.status !== 200 && data.message) {
      console.log({ data, ...responseInfo });
      yield put(requestFailed(data.message));
      return;
    }
    yield put(signInRoutine.success({ ...data }));
  } catch (e: any) {
    console.log(e.response);
    yield put(requestFailed(e.response.data.message));
  }
}
