import { call, put } from 'redux-saga/effects';
import * as Types from '../../types/types';
import { SagaIterator } from 'redux-saga';
import { setFavorites } from '../../store/favoritesSlice';
import { requestGetFavorites } from '../requests/favorites';
import { PayloadAction } from '@reduxjs/toolkit';

export function* handleGetFavorites({
  payload,
}: PayloadAction<Types.GetCompaniesProps>): SagaIterator {
  try {
    const response = yield call(requestGetFavorites, payload);
    const { data } = response;
    yield put(setFavorites({ ...data }));
  } catch (e) {
    console.log(e);
  }
}
