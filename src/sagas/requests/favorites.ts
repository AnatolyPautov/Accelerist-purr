import Api from '../../service/Service';
import * as Types from '../../types/types';

export const requestGetFavorites = (data: Types.GetCompaniesProps) => {
  const { page, limit } = data;
  return Api.get(`companies/favorites?page=${page}&limit=${limit}`);
};
