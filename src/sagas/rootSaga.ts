import { takeLatest } from 'redux-saga/effects';
import { handleGetCompanies } from './handlers/companies';
import { signInRoutine, signUpRoutine } from '../store/userSlice';
import { signInRequestHandler, signUpRequestHandler } from './handlers/user';
import { addCompanies } from '../store/companySlice';

export function* watcherSaga() {
  yield takeLatest(addCompanies.type, handleGetCompanies);

  yield takeLatest(signUpRoutine.TRIGGER, signUpRequestHandler);
  yield takeLatest(signInRoutine.TRIGGER, signInRequestHandler);
}
