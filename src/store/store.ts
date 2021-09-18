import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import companySlice from './companySlice';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../sagas/rootSaga';
import { createSelector } from 'reselect';
import favoritesSlice from './favoritesSlice';
import prospectsSlice from './prospectsSlice';
import userSlice from './userSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    companies: companySlice,
    favorites: favoritesSlice,
    prospects: prospectsSlice,
    user: userSlice,
  },
  devTools: true,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
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
