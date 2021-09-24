import Api from '../../service/Service';
import * as Types from '../../types/types';

export const signUp = (data: Types.AuthProps) => {
  return Api.post('auth/sign_up', { ...data });
};

export const signIn = (data: Types.AuthProps) => {
  return Api.post('auth/sign_in', { ...data });
};
