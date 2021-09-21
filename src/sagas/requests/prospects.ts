import Api from '../../service/Service';
import * as Types from '../../types/types';

export const requestGetProspects = (data: any) => {
  const { page, limit, sort } = data;
  return Api.get(`saved-list?page=${page}&limit=${limit}&sort=${sort || ''}`);
};
export const requestCreateProspect = (data: any) => {
  return Api.post('saved-list', {
    filters: {
      ...data,
    },
    prospectsAvailable: 1863,
  });
};
