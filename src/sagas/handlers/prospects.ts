import { call, put } from 'redux-saga/effects';
import * as Types from '../../types/types';
import { SagaIterator } from 'redux-saga';
import {
  setProspects,
  successCreateProspect,
} from '../../store/prospectsSlice';
import {
  requestCreateProspect,
  requestGetProspects,
} from '../requests/prospects';

export function* handleGetProspects({ payload }: any): SagaIterator {
  try {
    const response = yield call(requestGetProspects, payload);
    const { data } = response;
    yield put(setProspects({ ...data }));
  } catch (e) {
    console.log(e);
  }
}
export function* handleCreateProspect({ payload }: any): SagaIterator {
  try {
    const response = yield call(requestCreateProspect, payload);
    const { data } = response;
    console.log(response);
    yield put(successCreateProspect({}));
  } catch (e) {
    console.log(e);
  }
}
