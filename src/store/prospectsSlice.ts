import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as Types from "../types/types";

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
  totalItems: 0,
  currentPage: 0,
  totalPages: 0,
  itemCount: 0,
  currentProspect: {
    id: "",
    name: "Name",
    createdAt: "",
    filters: {
      q: "",
      deleteIds: [],
      industry: [],
      location: [],
      scope: "",
      totalAnnualContributors: "",
      revenueMin: "",
      revenueMax: "",
      csrFocusIds: [],
      affinities: [],
      gender: "",
      ethnicities: [],
      ageRanges: [],
      income: [],
      sdgGoals: [],
    },
    lastAuthor: {
      id: "",
      email: "",
      createdAt: "",
      firstName: "",
      lastName: "",
      loggedInAt: "",
      role: "",
      teamId: "",
      updatedAt: "",
      imported: false,
      isAuthorized: false,
      isReceivingNotifications: true,
    },
    prospectsAvailable: 0,
    updatedAt: "",
  },
  loading: false,
};

export const prospectsSlice = createSlice({
  name: "prospects",
  initialState,
  reducers: {
    addProspects(state, { payload }: PayloadAction<Types.GetProspectsProps>) {
      state.loading = true;
    },
    setProspects(state, { payload }: PayloadAction<Types.ProspectsData>) {
      state.prospects = payload.items;
      state.totalItems = payload.meta.totalItems;
      state.currentPage = Number(payload.meta.currentPage);
      state.totalPages = payload.meta.totalPages;
      state.itemCount = payload.meta.itemCount;
      state.loading = false;
    },
    setCurrentProspect(
      state,
      {
        payload,
      }: PayloadAction<{ id: string; name?: string; filters: Types.Filter }>
    ) {
      state.currentProspect.id = payload.id;
      state.currentProspect.name = payload.name;
      state.currentProspect.filters = payload.filters;
    },
    removeProspect(state, { payload }: PayloadAction<string>) {
      state.loading = true;
    },
    successRemoveProspect(state) {
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
