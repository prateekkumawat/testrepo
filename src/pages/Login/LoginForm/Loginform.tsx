import React, { Dispatch, SetStateAction, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { Button, notification, Form } from 'antd';
import { IoMdLock } from 'react-icons/io';
import { Formik } from 'formik';
import { LoginDetailValidations } from '../validations';
import {
  StyledFormItem,
  StyledSimpleInput,
} from '../../../Component/Form/Form';
import { SignInContainer } from './LoginFormWrapper.styled';
import { LoginService } from '../../../Service/Login';
import { login } from '../../../Store/Slice/User.slice';
import { LoginPages } from '../utility';
import { useAppDispatch } from '../../../Store/Store';

const ErrorDisplay: React.FC<{ error: string | undefined }> = ({ error }) => {
  return error ? (
    <div className="error" style={{ color: 'red', fontWeight: '500' }}>
      {error}
    </div>
  ) : null;
};

interface LoginProps {
  className?: string;
  setActiveTab: Dispatch<SetStateAction<LoginPages>>;
}
const LoginForm: React.FC<LoginProps> = ({ className, setActiveTab }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitBtnLoading, setIsSubmitBtnLoading] = useState<boolean>(false);
  const loginService = LoginService();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: any) => {
    try {
      setIsSubmitBtnLoading(true);
      const data = await loginService.getAccessToken(values);
      const payload = {
        name: '',
        email: values?.email,
        accessToken: data?.token,
        refreshToken: data?.refreshToken,
        isAdmin: false,
      };
      dispatch(login(payload));
      setActiveTab(LoginPages.SUCCESSFULL_LOGIN);
    } catch (err: any) {
      console.log('err', err);
      notification.error({
        message: err?.response || 'Error occured while login. Please try again',
      });
    } finally {
      setIsSubmitBtnLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SignInContainer className={className}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginDetailValidations}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formikProps) => (
          <Form onFinish={formikProps.handleSubmit} layout="vertical">
            <h1>Sign in</h1>
            <p>Hey, please enter your details to sign in to your account.</p>
            <StyledFormItem
              className="form-label"
              label="email"
              required
              name="email"
              validateStatus={formikProps.errors.email ? 'error' : ''}
              help={formikProps.errors.email}
            >
              <StyledSimpleInput
                required
                type="text"
                id="email"
                name="email"
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.email}
                className="input_box"
                placeholder="Username"
                prefix={<FaUser className="icon" />}
              />
            </StyledFormItem>
            <StyledFormItem
              className="form-label"
              label="password"
              required
              name="password"
              validateStatus={formikProps.errors.password ? 'error' : ''}
              help={formikProps.errors.password}
            >
              <StyledSimpleInput
                required
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.password}
                className="input_box"
                suffix={
                  <div onClick={togglePasswordVisibility}>
                    {passwordVisible ? (
                      <AiFillEyeInvisible className="password-icon" />
                    ) : (
                      <AiFillEye className="password-icon" />
                    )}
                  </div>
                }
                placeholder="Password"
                prefix={<IoMdLock className="icon-pass" />}
              />
            </StyledFormItem>
            <StyledFormItem className="forgot-password">
              <div
                style={{
                  color: 'blue',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setActiveTab(LoginPages.FORGOT_PASSWORD);
                }}
              >
                Forgot password
              </div>
            </StyledFormItem>
            <Button
              className="login-buttons"
              type="primary"
              htmlType="submit"
              loading={isSubmitBtnLoading}
            >
              Sign in
            </Button>
          </Form>
        )}
      </Formik>
    </SignInContainer>
  );
};

export default LoginForm;
