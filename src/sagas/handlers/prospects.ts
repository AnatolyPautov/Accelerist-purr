import { call, put } from 'redux-saga/effects';
import * as Types from '../../types/types';
import { SagaIterator } from 'redux-saga';
import {
  setProspects,
  successRemoveProspect,
} from '../../store/prospectsSlice';
import {
  requestCreateProspect,
  requestGetProspects,
  requestRemoveProspect,
} from '../requests/prospects';
import { successCreateProspect } from '../../store/companySlice';
import { PayloadAction } from '@reduxjs/toolkit';

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
    console.log(response);
    yield put(successCreateProspect({}));
  } catch (e) {
    console.log(e);
  }
}
export function* handleRemoveProspect({
  payload,
}: PayloadAction<string>): SagaIterator {
  try {
    const response = yield call(requestRemoveProspect, payload);
    console.log(response);
    yield put(successRemoveProspect({}));
  } catch (e) {
    console.log(e);
  }
}
