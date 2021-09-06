import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface CompaniesSliceState {
  companies: any[];
  totalCompanies: number;
  currentPage: number;
  totalPages: number;
  itemCount: number;
  loading: boolean;
  currentCompany: any;
  searchParams: any;
}

const initialState: CompaniesSliceState = {
  companies: [],
  totalCompanies: 2054,
  currentPage: 1,
  totalPages: 1,
  itemCount: 12,
  loading: false,
  currentCompany: {},
  searchParams: {
    q: '',
  },
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompanies(state, { payload }) {
      state.loading = true;
      state.searchParams.q = payload.q;
    },
    setCompanies(state, { payload }) {
      console.log(payload.items);
      state.companies = payload.items;
      state.totalCompanies = payload.meta.totalItems;
      state.currentPage = Number(payload.meta.currentPage);
      state.totalPages = payload.meta.totalPages;
      state.itemCount = payload.meta.itemCount;
      state.loading = false;
    },
    addCompany(state, { payload }) {
      state.loading = true;
    },
    setCompany(state, { payload }) {
      console.log(payload);
      state.currentCompany = payload;
      state.loading = false;
    },
  },
});

export const { addCompanies, setCompanies, addCompany, setCompany } =
  companiesSlice.actions;

export default companiesSlice.reducer;
