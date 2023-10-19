import React, { Dispatch, SetStateAction, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Button, notification } from 'antd';
import { IoMdLock } from 'react-icons/io';
import { useFormik } from 'formik';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ChangePasswordWrapper } from './ChangePasswordWrapper.styled';
import { ChangePasswordValidations } from '../validations';
import {
  StyledFormItem,
  StyledSimpleInput,
} from '../../../Component/Form/Form';
import { LoginService } from '../../../Service/Login';
import { LoginPages } from '../utility';

interface ErrorDisplayProps {
  error: string | undefined;
}

const ErrorDisplay: React.FC<{ error: string | undefined }> = ({ error }) => {
  return error ? (
    <div
      className="error"
      style={{ color: 'red', fontWeight: '500', margin: '5px' }}
    >
      {error}
    </div>
  ) : null;
};

export const ChangePassword: React.FC<{
  username: string;
  setActiveTab: Dispatch<SetStateAction<LoginPages>>;
}> = ({ setActiveTab, username }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(false);

  const loginService = LoginService();

  const handleSubmit = async (newPassword: string) => {
    try {
      setLoader(true);
      await loginService.changePassword({
        email: username,
        newPassword,
      });
      setLoader(false);
      notification.success({
        message: 'password changed successfully',
      });
      setActiveTab(LoginPages.SUCCESSFULLY_CHANGED_PASSWORD);
    } catch (err: any) {
      setLoader(false);
      notification.error({
        message: err?.response || 'Error Occured',
      });
    }
  };

  const formikProps = useFormik({
    initialValues: {
      newpassword: '',
      confirmpassword: '',
    },
    validationSchema: ChangePasswordValidations,
    onSubmit: (values) => {
      handleSubmit(values.newpassword);
    },
  });

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <ChangePasswordWrapper>
      <form onSubmit={formikProps.handleSubmit}>
        <h1>New Password</h1>
        <p>Enter your new Password</p>
        <StyledFormItem className="labels">
          Password
          <StyledSimpleInput
            required
            type={passwordVisible ? 'text' : 'password'}
            id="newpassword"
            name="newpassword"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            value={formikProps.values.newpassword}
            className="input_box"
            suffix={
              <div onClick={() => setPasswordVisible((prev) => !prev)}>
                {passwordVisible ? (
                  <AiFillEyeInvisible className="icon" />
                ) : (
                  <AiFillEye className="icon" />
                )}
              </div>
            }
            placeholder="New Password"
            prefix={<MdEmail className="icon" />}
          />
          <ErrorDisplay error={formikProps.errors.newpassword} />
        </StyledFormItem>
        <StyledFormItem
          className="labels"
          validateStatus={formikProps.errors?.confirmpassword ? 'error' : ''}
          help={formikProps.errors?.confirmpassword}
        >
          Confirm Password
          <StyledSimpleInput
            required
            type={confirmPasswordVisible ? 'text' : 'password'}
            id="confirmpassword"
            name="confirmpassword"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            value={formikProps.values.confirmpassword}
            className="input_box"
            suffix={
              <div onClick={() => setConfirmPasswordVisible((prev) => !prev)}>
                {confirmPasswordVisible ? (
                  <AiFillEyeInvisible className="icon" />
                ) : (
                  <AiFillEye className="icon" />
                )}
              </div>
            }
            placeholder="confirm Password"
            prefix={<IoMdLock className="icon" />}
          />
        </StyledFormItem>
        <Button
          className="login-buttons"
          type="primary"
          htmlType="submit"
          loading={loader}
          disabled={
            formikProps.values.confirmpassword !==
            formikProps.values.newpassword
          }
        >
          Reset Password
        </Button>
        <p className="bottom-text">
          Already have an Account? <a onClick={navigateToLogin}>Sign In</a>
        </p>
      </form>
    </ChangePasswordWrapper>
  );
};
