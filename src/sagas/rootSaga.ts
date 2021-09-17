import { takeLatest } from 'redux-saga/effects';
import {
  handleGetCompanies,
  handleGetCompany,
  handleGetFavorites,
  handleGetProspects,
} from './handlers/companies';
import { signInRoutine, signUpRoutine } from '../store/userSlice';
import { signInRequestHandler, signUpRequestHandler } from './handlers/user';
import { addCompanies, addCompany } from '../store/companySlice';
import { addFavorites } from '../store/favoritesSlice';
import { addProspects } from '../store/prospectsSlice';

export function* watcherSaga() {
  yield takeLatest(addCompanies.type, handleGetCompanies);
  yield takeLatest(addFavorites.type, handleGetFavorites);
  yield takeLatest(addProspects.type, handleGetProspects);
  yield takeLatest(addCompany.type, handleGetCompany);

  yield takeLatest(signUpRoutine.TRIGGER, signUpRequestHandler);
  yield takeLatest(signInRoutine.TRIGGER, signInRequestHandler);
}
