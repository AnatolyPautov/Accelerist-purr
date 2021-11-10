import { call, put } from "redux-saga/effects";
import * as Types from "../../types/types";
import { SagaIterator } from "redux-saga";
import {
  setProspects,
  successRemoveProspect,
} from "../../store/prospectsSlice";
import {
  requestCreateProspect,
  requestGetProspects,
  requestRemoveProspect,
} from "../requests/prospects";
import { successCreateProspect } from "../../store/companiesSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export function* handleGetProspects({
  payload,
}: PayloadAction<Types.GetProspectsProps>): SagaIterator {
  try {
    const response = yield call(requestGetProspects, payload);
    const { data } = response;
    yield put(setProspects({ ...data }));
  } catch (e) {
    console.log(e);
  }
}
export function* handleCreateProspect({
  payload,
}: PayloadAction<Types.CreateProspectsProps>): SagaIterator {
  try {
    yield call(requestCreateProspect, payload);
    yield put(successCreateProspect());
  } catch (e) {
    console.log(e);
  }
}
export function* handleRemoveProspect({
  payload,
}: PayloadAction<string>): SagaIterator {
  try {
    yield call(requestRemoveProspect, payload);
    yield put(successRemoveProspect());
  } catch (e) {
    console.log(e);
  }
}
