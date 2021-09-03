import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface CompaniesSliceState {
  companies: any[];
  totalCompanies: number;
  currentPage: number;
  loading: boolean;
  currentCompany: any;
}

const initialState: CompaniesSliceState = {
  companies: [],
  totalCompanies: 2054,
  currentPage: 1,
  loading: false,
  currentCompany: {},
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompanies(state, { payload }) {
      state.loading = true;
    },
    setCompanies(state, { payload }) {
      console.log(payload.items);
      state.companies = payload.items;
      state.totalCompanies = payload.meta.totalItems;
      state.currentPage = Number(payload.meta.currentPage);
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
