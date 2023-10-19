import * as Yup from 'yup';

export const ProviderBasicInfoValidations = Yup.object({
//   firstName: Yup.string().required('First name is required'),
//   lastName: Yup.string().required('Last name is required'),
//   dateOfBirth: Yup.date().nullable().required('Date of birth is required'),
//   gender: Yup.string().required('Gender is required'),
  primaryNumber: Yup.string().required('Primary phone number is required').min(10, 'Phone number needs to be 10 digits'),
  secondaryNumber: Yup.string().min(10, 'Phone number needs to be 10 digits'),
});
export const ProviderAdditionalInfoValidations = Yup.object({});
export const ProviderValidations = Yup.object({});
