import * as Yup from 'yup';

export const LoginDetailValidations = Yup.object({
  email: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must contain minimum 8 characters'),
});

export const ChangePasswordValidations = Yup.object({
  newpassword: Yup.string()
    .required('Password is required')
    .min(8, 'Password must contain minimum 8 characters'),
  confirmpassword: Yup.string()
    .required('Password is required')
    .test('passwords-match', 'Passwords must be same', function (value) {
      return this.parent.newpassword === value;
    }),
});

export const SignUpValidations = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must contain minimum 8 characters'),
  repassword: Yup.string()
    .required('Password is required')
    .min(8, 'Password must contain minimum 8 characters')
    .test('passwords-match', 'Passwords must be same', function (value) {
      return this.parent.password === value;
    }),
  checkbox: Yup.boolean().oneOf([true], 'Field is required'),
});

export const ForgotPasswordValidations = Yup.object({
  email: Yup.string().required('Email is required'),
  checkbox: Yup.boolean().oneOf([true], 'Field is required'),
});
