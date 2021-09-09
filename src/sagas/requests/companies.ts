import Api from '../../service/Service';
import * as Types from '../../types/types';

export const requestGetCompanies = (data: any) => {
  const { page, limit, q, revenueMax, revenueMin } = data;
  return Api.get(
    `companies?page=${page}&limit=${limit}&q=${q || ''}&revenueMin=${
      revenueMin || ''
    }&revenueMax=${revenueMax || ''}`
  );
};
export const requestGetCompany = (id: any) => {
  return Api.get(`companies/${id}`);
};
