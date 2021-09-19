import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface ProspectsSliceState {
  prospects: Types.Company[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  itemCount: number;
  currentProspect: any;
  loading: boolean;
}

const initialState: ProspectsSliceState = {
  prospects: [],
  totalItems: 32,
  currentPage: 1,
  totalPages: 1,
  itemCount: 12,
  currentProspect: {
    name: 'Name',
  },
  loading: false,
};

export const prospectsSlice = createSlice({
  name: 'prospects',
  initialState,
  reducers: {
    addProspects(state, { payload }) {
      state.loading = true;
    },
    setProspects(state, { payload }) {
      console.log(payload);
      state.prospects = payload.items;
      state.totalItems = payload.meta.totalItems;
      state.currentPage = Number(payload.meta.currentPage);
      state.totalPages = payload.meta.totalPages;
      state.itemCount = payload.meta.itemCount;
      state.loading = false;
    },
    setCurrentProspect(state, { payload }) {
      state.currentProspect.name = payload;
    },
    createProspect(state, { payload }) {
      state.loading = true;
    },
    successCreateProspect(state, { payload }) {
      state.loading = false;
    },
  },
});

export const {
  addProspects,
  setProspects,
  setCurrentProspect,
  createProspect,
  successCreateProspect,
} = prospectsSlice.actions;

export default prospectsSlice.reducer;
