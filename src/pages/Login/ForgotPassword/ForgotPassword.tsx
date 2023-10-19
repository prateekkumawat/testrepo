import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, notification } from 'antd';
import { useFormik } from 'formik';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordValidations } from '../validations';
import {
  StyledFormItem,
  StyledSimpleInput,
} from '../../../Component/Form/Form';
import { ForgotPasswordWrapper } from './ForgotPassWordWrapper.styled';
import { LoginService } from '../../../Service/Login';
import { LoginPages } from '../utility';

interface ErrorDisplayProps {
  error: string | undefined;
}

const ErrorDisplay: React.FC<{
  error: string | undefined;
}> = ({ error }) => {
  return error ? (
    <div
      className="error"
      style={{ color: 'red', fontWeight: '500', margin: '5px' }}
    >
      {error}
    </div>
  ) : null;
};

export const ForgotPassword: React.FC<{
  setUsername: Dispatch<SetStateAction<string>>;
  setActiveTab: Dispatch<SetStateAction<LoginPages>>;
}> = ({ setActiveTab, setUsername }) => {
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();

  const loginService = LoginService();
  const handleSubmit = async (email: string) => {
    try {
      setLoader(true);
      await loginService.sendOTP(email);
      setLoader(false);
      setUsername(email);
      setActiveTab(LoginPages.VALIDATE_OTP);
    } catch (err: any) {
      setLoader(false);
      console.log('handleSubmit -> err', err);
      notification.error({
        message: err?.response || 'Error Occured',
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotPasswordValidations,
    onSubmit: (values) => {
      console.log('values', values);
      handleSubmit(values.email);
    },
  });

  const navigateToSignup = () => {
    navigate('/signUp');
  };

  return (
    <ForgotPasswordWrapper>
      <form onSubmit={formik.handleSubmit}>
        <h1>Forgot Password</h1>
        <p className="above-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <StyledFormItem className="form-label">
          User Email
          <StyledSimpleInput
            required
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input_box"
            placeholder="User Email"
            prefix={<MdEmail className="icon" />}
          />
          <ErrorDisplay error={formik.errors.email} />
        </StyledFormItem>
        <Button
          className="login-buttons"
          type="primary"
          htmlType="submit"
          loading={loader}
        >
          Continue
        </Button>
        {/* <p className="bottom-text">
          Don't Have An Account? <a onClick={navigateToSignup}>Sign Up</a>
        </p> */}
      </form>
    </ForgotPasswordWrapper>
  );
};
