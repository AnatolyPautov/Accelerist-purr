import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface FavoritesSliceState {
  favorites: Types.Company[];
  totalCompanies: number;
  currentPage: number;
  totalPages: number;
  itemCount: number;
  loading: boolean;
  currentCompany: Types.Company;
}

const initialState: FavoritesSliceState = {
  favorites: [],
  totalCompanies: 32,
  currentPage: 1,
  totalPages: 1,
  itemCount: 12,
  loading: false,
  currentCompany: {
    name: '',
    revenue: 0,
    descriptionList: '',
    employeeCount: 0,
    ticker: '',
    website: '',
    phone: '',
    city: '',
    state: '',
    street: '',
    zipCode: '',
    id: '',
    fax: '',
    score: 0,
    like: false,
  },
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites(state, { payload }) {
      state.loading = true;
    },
    setFavorites(state, { payload }) {
      console.log(payload);
      state.favorites = payload.items;
      state.totalCompanies = payload.meta.totalItems;
      state.currentPage = Number(payload.meta.currentPage);
      state.totalPages = payload.meta.totalPages;
      state.itemCount = payload.meta.itemCount;
      state.loading = false;
    },
  },
});

export const { addFavorites, setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
