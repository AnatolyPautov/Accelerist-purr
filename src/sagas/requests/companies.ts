import Api from '../../service/Service';
import * as Types from '../../types/types';

export const requestGetCompanies = (data: any) => {
  const { page, limit, q } = data;
  return Api.get(`companies?page=${page}&limit=${limit}`);
};
export const requestGetCompany = (id: any) => {
  return Api.get(`companies/${id}`);
};
