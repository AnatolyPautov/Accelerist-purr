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
};
export type User = {
  email: string;
  name: string;
  password: string;
  token: string;
};
