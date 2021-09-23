import { takeLatest } from 'redux-saga/effects';
import {
  handleGetCompanies,
  handleGetCompany,
  handleGetDislike,
  handleGetLike,
} from './handlers/companies';
import { signInRoutine, signUpRoutine } from '../store/userSlice';
import { signInRequestHandler, signUpRequestHandler } from './handlers/user';
import {
  addCompanies,
  addCompany,
  addDislike,
  addLike,
  createProspect,
} from '../store/companySlice';
import { addFavorites } from '../store/favoritesSlice';
import { addProspects, removeProspect } from '../store/prospectsSlice';
import { handleGetFavorites } from './handlers/favorites';
import {
  handleCreateProspect,
  handleGetProspects,
  handleRemoveProspect,
} from './handlers/prospects';

export function* watcherSaga() {
  yield takeLatest(addCompanies.type, handleGetCompanies);
  yield takeLatest(addFavorites.type, handleGetFavorites);
  yield takeLatest(addProspects.type, handleGetProspects);
  yield takeLatest(addCompany.type, handleGetCompany);
  yield takeLatest(addLike.type, handleGetLike);
  yield takeLatest(addDislike.type, handleGetDislike);

  yield takeLatest(createProspect.type, handleCreateProspect);

  yield takeLatest(removeProspect.type, handleRemoveProspect);

  yield takeLatest(signUpRoutine.TRIGGER, signUpRequestHandler);
  yield takeLatest(signInRoutine.TRIGGER, signInRequestHandler);
}
