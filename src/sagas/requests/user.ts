import Api from '../../service/Service';
import * as Types from '../../types/types';

export const signUp = (data: any) => {
  return Api.post('auth/sign_up', { ...data });
};

export const signIn = (data: any) => {
  return Api.post('auth/sign_in', { ...data });
};
