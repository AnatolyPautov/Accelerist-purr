import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface FavoritesSliceState {
  favorites: Types.Company[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  itemCount: number;
  loading: boolean;
}

const initialState: FavoritesSliceState = {
  favorites: [],
  totalItems: 0,
  currentPage: 0,
  totalPages: 0,
  itemCount: 0,
  loading: false,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites(state, { payload }: PayloadAction<Types.GetCompaniesProps>) {
      state.loading = true;
    },
    setFavorites(state, { payload }: PayloadAction<Types.CompaniesData>) {
      console.log(payload);
      state.favorites = payload.items;
      state.totalItems = payload.meta.totalItems;
      state.currentPage = Number(payload.meta.currentPage);
      state.totalPages = payload.meta.totalPages;
      state.itemCount = payload.meta.itemCount;
      state.loading = false;
    },
  },
});

export const { addFavorites, setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
