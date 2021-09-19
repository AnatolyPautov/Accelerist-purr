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
  q: string;
  deleteIds: Array<string>;
  industry: Array<string>;
  location: Array<string>;
  scope: string;
  totalAnnualContributors: string;
  revenueMin: string;
  revenueMax: string;
  csrFocusIds: Array<number>;
  affinities: Array<string>;
  gender: string;
  ethnicities: Array<string>;
  ageRanges: Array<string>;
  income: Array<string>;
  sdgGoals: Array<string>;
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
