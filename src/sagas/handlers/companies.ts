import { call, put } from 'redux-saga/effects';
import {
  requestGetCompanies,
  requestGetCompany,
  requestGetFavorites,
} from '../requests/companies';
import * as Types from '../../types/types';
import { SagaIterator } from 'redux-saga';
import { PayloadAction } from '@reduxjs/toolkit';
import { setCompanies, setCompany } from '../../store/companySlice';
import { setFavorites } from '../../store/favoritesSlice';

export function* handleGetCompanies({ payload }: any): SagaIterator {
  try {
    const response = yield call(requestGetCompanies, payload);
    const { data } = response;
    yield put(setCompanies({ ...data }));
  } catch (e) {
    console.log(e);
  }
}
export function* handleGetFavorites({ payload }: any): SagaIterator {
  try {
    const response = yield call(requestGetFavorites, payload);
    const { data } = response;
    yield put(setFavorites({ ...data }));
  } catch (e) {
    console.log(e);
  }
}
export function* handleGetCompany({ payload }: any): SagaIterator {
  try {
    const response = yield call(requestGetCompany, payload);
    const { data } = response;
    yield put(setCompany(data));
  } catch (e) {
    console.log(e);
  }
}
