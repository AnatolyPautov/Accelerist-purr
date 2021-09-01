import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface CardsSliceState {
  companies: any[];
}

const initialState: CardsSliceState = {
  companies: [],
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompanies(state, { payload }) {},
    setCompanies(state, { payload }) {
      console.log(payload.items);
      state.companies = payload.items;
    },
  },
});

export const { addCompanies, setCompanies } = companiesSlice.actions;

export default companiesSlice.reducer;
