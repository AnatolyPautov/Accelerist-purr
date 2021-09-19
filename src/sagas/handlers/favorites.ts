import { call, put } from 'redux-saga/effects';
import * as Types from '../../types/types';
import { SagaIterator } from 'redux-saga';
import { setFavorites } from '../../store/favoritesSlice';
import { requestGetFavorites } from '../requests/favorites';

export function* handleGetFavorites({ payload }: any): SagaIterator {
  try {
    const response = yield call(requestGetFavorites, payload);
    const { data } = response;
    yield put(setFavorites({ ...data }));
  } catch (e) {
    console.log(e);
  }
}
