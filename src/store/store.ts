import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import companySlice from './companySlice';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../sagas/rootSaga';
import { createSelector } from 'reselect';
import favoritesSlice from './favoritesSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    companies: companySlice,
    favorites: favoritesSlice,
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

export default store;
