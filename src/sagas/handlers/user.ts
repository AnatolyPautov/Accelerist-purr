import { signIn, signUp } from "./../requests/user";
import { call, put } from "redux-saga/effects";
import * as Types from "../../types/types";
import { SagaIterator } from "redux-saga";
import {
  requestFailed,
  signInRoutine,
  signUpRoutine,
} from "../../store/userSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export function* signUpRequestHandler({
  payload,
}: PayloadAction<Types.AuthProps>): SagaIterator {
  try {
    const { data } = yield call(signUp, { ...payload });
    yield put(signUpRoutine.success({ ...data }));
  } catch (e: any) {
    yield put(requestFailed(e.response.data.message));
  }
}
export function* signInRequestHandler({
  payload,
}: PayloadAction<Types.AuthProps>): SagaIterator {
  try {
    const { data } = yield call(signIn, { ...payload });

    yield put(signInRoutine.success({ ...data }));
  } catch (e: any) {
    yield put(requestFailed(e.response.data.message));
  }
}
