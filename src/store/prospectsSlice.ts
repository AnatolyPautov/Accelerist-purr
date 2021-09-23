import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface ProspectsSliceState {
  prospects: Types.Prospect[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  itemCount: number;
  currentProspect: Types.Prospect;
  loading: boolean;
}

const initialState: ProspectsSliceState = {
  prospects: [],
  totalItems: 32,
  currentPage: 1,
  totalPages: 1,
  itemCount: 12,
  currentProspect: {
    id: '',
    name: 'Name',
    createdAt: '',
    filters: {
      q: '',
      deleteIds: [],
      industry: [],
      location: [],
      scope: '',
      totalAnnualContributors: '',
      revenueMin: '',
      revenueMax: '',
      csrFocusIds: [],
      affinities: [],
      gender: '',
      ethnicities: [],
      ageRanges: [],
      income: [],
      sdgGoals: [],
    },
    lastAuthor: {
      id: '',
      email: '',
      createdAt: '',
      firstName: '',
      lastName: '',
      loggedInAt: '',
      role: '',
      teamId: '',
      updatedAt: '',
      imported: false,
      isAuthorized: false,
      isReceivingNotifications: true,
    },
    prospectsAvailable: 0,
    updatedAt: '',
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
      state.currentProspect.id = payload.id;
      state.currentProspect.name = payload.name;
      state.currentProspect.filters = payload.filters;
    },
    removeProspect(state, { payload }) {
      state.loading = true;
    },
    successRemoveProspect(state, { payload }) {
      state.loading = false;
    },
  },
});

export const {
  addProspects,
  setProspects,
  setCurrentProspect,
  removeProspect,
  successRemoveProspect,
} = prospectsSlice.actions;

export default prospectsSlice.reducer;
