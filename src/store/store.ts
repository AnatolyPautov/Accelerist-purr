import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import companiesSlice from './companiesSlice';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../sagas/rootSaga';
import { createSelector } from 'reselect';
import favoritesSlice from './favoritesSlice';
import prospectsSlice from './prospectsSlice';
import userSlice from './userSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  companies: companiesSlice,
  favorites: favoritesSlice,
  prospects: prospectsSlice,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const selectCompaniesState = (state: RootState) => state.companies;
export const getCompaniesState = createSelector(
  selectCompaniesState,
  (data) => data
);

const selectFavoritesState = (state: RootState) => state.favorites;
export const getFavoritesState = createSelector(
  selectFavoritesState,
  (data) => data
);

const selectProspectsState = (state: RootState) => state.prospects;
export const getProspectsState = createSelector(
  selectProspectsState,
  (data) => data
);

const selectUserState = (state: RootState) => state.user;
export const getUserState = createSelector(selectUserState, (data) => data);

export default store;
