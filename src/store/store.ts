import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import companySlice from './companySlice';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../sagas/rootSaga';
import { createSelector } from 'reselect';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: companySlice,
  devTools: true,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const selectCompaniesState = (state: RootState) => state;
export const getCompaniesState = createSelector(
  selectCompaniesState,
  (data) => data
);

export default store;
