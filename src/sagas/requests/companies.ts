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
export const requestGetCompany = (id: string) => {
  return Api.get(`companies/${id}`);
};
export const requestGetLike = (id: string) => {
  return Api.get(`companies/${id}/like`);
};
export const requestGetDislike = (id: string) => {
  return Api.get(`companies/${id}/dislike`);
};
