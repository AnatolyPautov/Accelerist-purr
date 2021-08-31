import { call, put } from 'redux-saga/effects';
import { requestGetCompanies } from '../requests/companies';
import * as Types from '../../types/types';
import { SagaIterator } from 'redux-saga';
import { PayloadAction } from '@reduxjs/toolkit';
import { setCompanies } from '../../store/companySlice';

export function* handleGetCompanies({ payload }: any): SagaIterator {
  try {
    const response = yield call(requestGetCompanies, payload);
    const { data } = response;
    yield put(setCompanies({ ...data }));
  } catch (e) {
    console.log(e);
  }
}
