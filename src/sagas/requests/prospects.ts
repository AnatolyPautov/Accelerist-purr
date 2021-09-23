import Api from '../../service/Service';
import * as Types from '../../types/types';

export const requestGetProspects = (data: any) => {
  const { page, limit, sort } = data;
  return Api.get(`saved-list?page=${page}&limit=${limit}&sort=${sort || ''}`);
};
export const requestCreateProspect = (data: any) => {
  const { filters, total } = data;
  return Api.post('saved-list', {
    filters: {
      ...filters,
    },
    prospectsAvailable: total,
  });
};
export const requestRemoveProspect = (id: string) => {
  return Api.delete(`saved-list/${id}`);
};
