import Api from '../../service/Service';
import * as Types from '../../types/types';

export const requestGetFavorites = (data: any) => {
  const { page, limit } = data;
  return Api.get(`companies/favorites?page=${page}&limit=${limit}`);
};
