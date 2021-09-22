import { call, put } from 'redux-saga/effects';
import {
  requestGetCompanies,
  requestGetCompany,
  requestGetLike,
} from '../requests/companies';
import * as Types from '../../types/types';
import { SagaIterator } from 'redux-saga';
import { PayloadAction } from '@reduxjs/toolkit';
import { setCompanies, setCompany, setLike } from '../../store/companySlice';

export function* handleGetCompanies({ payload }: any): SagaIterator {
  try {
    const response = yield call(requestGetCompanies, payload);
    const { data } = response;
    yield put(setCompanies({ ...data }));
  } catch (e) {
    console.log(e);
  }
}
export function* handleGetCompany({
  payload,
}: PayloadAction<string>): SagaIterator {
  try {
    const response = yield call(requestGetCompany, payload);
    const { data } = response;
    yield put(setCompany(data));
  } catch (e) {
    console.log(e);
  }
}
export function* handleGetLike({
  payload,
}: PayloadAction<string>): SagaIterator {
  try {
    yield call(requestGetLike, payload);
    yield put(setLike(payload));
  } catch (e) {
    console.log(e);
  }
}
