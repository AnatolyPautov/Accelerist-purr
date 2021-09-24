import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface CompaniesSliceState {
  companies: Types.Company[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  itemCount: number;
  loading: boolean;
  showlikeModal: boolean;
  currentCompany: Types.Company;
  searchParams: Types.Filter;
}

const initialState: CompaniesSliceState = {
  companies: [],
  totalItems: 2054,
  currentPage: 1,
  totalPages: 1,
  itemCount: 12,
  loading: false,
  showlikeModal: false,
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
  searchParams: {
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
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompanies(state, { payload }: PayloadAction<Types.GetCompaniesProps>) {
      state.loading = true;
      state.searchParams.q = payload.q;
      state.searchParams.revenueMin = payload.revenueMin;
      state.searchParams.revenueMax = payload.revenueMax;
    },
    setCompanies(state, { payload }: PayloadAction<Types.CompaniesData>) {
      console.log(payload.items);
      state.companies = payload.items;
      state.totalItems = payload.meta.totalItems;
      state.currentPage = Number(payload.meta.currentPage);
      state.totalPages = payload.meta.totalPages;
      state.itemCount = payload.meta.itemCount;
      state.loading = false;
    },
    addCompany(state, { payload }: PayloadAction<string>) {
      state.loading = true;
    },
    setCompany(state, { payload }: PayloadAction<Types.Company>) {
      state.currentCompany = payload;
      state.loading = false;
    },
    addLike(state, { payload }: PayloadAction<string>) {},
    addDislike(state, { payload }: PayloadAction<string>) {},
    updateLike(
      state,
      { payload }: PayloadAction<{ id: string; like: boolean }>
    ) {
      const updateCompanies = state.companies.map((company) => {
        if (company.id === payload.id)
          return { ...company, like: payload.like };
        return company;
      });
      state.companies = updateCompanies;
      if (payload.like) {
        state.showlikeModal = true;
      }
    },
    closeLikeModal(state) {
      state.showlikeModal = false;
    },
    createProspect(
      state,
      { payload }: PayloadAction<Types.CreateProspectsProps>
    ) {
      state.loading = true;
    },
    successCreateProspect(state) {
      state.loading = false;
    },
  },
});

export const {
  addCompanies,
  setCompanies,
  addCompany,
  setCompany,
  addLike,
  addDislike,
  updateLike,
  closeLikeModal,
  createProspect,
  successCreateProspect,
} = companiesSlice.actions;

export default companiesSlice.reducer;
