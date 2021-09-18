export const composeValidators =
  (...validators: Array<(value: string) => undefined | any>) =>
  (value: string) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export const validateInput = (value: string) =>
  value ? undefined : 'Required';
const emailRegex = /\S+@\S+\.\S+/;
export const validateEmail = (value: string) => {
  if (!emailRegex.test(value)) {
    return 'Incorrect email format';
  }
};
export const validateUnauthorized = (error: string) => {
  if (error) {
    return error;
  }
};
