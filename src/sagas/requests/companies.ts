import Api from '../../service/Service';
import * as Types from '../../types/types';

export const requestGetCompanies = (data: any) => {
  const { page, limit } = data;
  return Api.get(`companies?page=${page}&limit=${limit}`);
};
