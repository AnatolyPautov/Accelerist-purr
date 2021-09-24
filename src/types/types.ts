export type Company = {
  name: string;
  revenue: number;
  descriptionList: string;
  employeeCount: number;
  ticker: string;
  website: string;
  phone: string;
  city: string;
  state: string;
  street: string;
  zipCode: string;
  id: string;
  fax: string;
  score: number;
  like: boolean;
};
export type Filter = {
  q?: string;
  deleteIds?: Array<string>;
  industry?: Array<string>;
  location?: Array<string>;
  scope?: string;
  totalAnnualContributors?: string;
  revenueMin?: string;
  revenueMax?: string;
  csrFocusIds?: Array<number>;
  affinities?: Array<string>;
  gender?: string;
  ethnicities?: Array<string>;
  ageRanges?: Array<string>;
  income?: Array<string>;
  sdgGoals?: Array<string>;
};
export type User = {
  id: string;
  email: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  loggedInAt: string;
  role: string;
  teamId: string;
  updatedAt: string;
  imported: boolean;
  isAuthorized: boolean;
  isReceivingNotifications: boolean;
};
export type Prospect = {
  id: string;
  createdAt: string;
  filters: Filter;
  lastAuthor: User;
  name: string | undefined;
  prospectsAvailable: number;
  updatedAt: string;
};
export type GetCompaniesProps = {
  page: number;
  limit: number;
  q?: string;
  revenueMin?: string;
  revenueMax?: string;
};
export type CompaniesMeta = {
  currentPage: string;
  itemCount: number;
  itemsPerPage: string;
  totalItems: number;
  totalPages: number;
};
export type CompaniesData = {
  items: Company[];
  meta: CompaniesMeta;
};
export type ProspectsData = {
  items: Prospect[];
  meta: CompaniesMeta;
};
export type GetProspectsProps = {
  page: number;
  limit: number;
  sort?: string;
};
export type CreateProspectsProps = {
  filters: Filter;
  total: number;
};
export type AuthProps = {
  email: string;
  password: string;
};
