import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import {
  StyledFormItem,
  StyledSimpleInput,
} from '../../../Component/Form/Form';
import { Button } from 'antd';
import { IoMdLock } from 'react-icons/io';
import { LoginDetailValidations, SignUpValidations } from '../validations';
import { useFormik } from 'formik';
import { Captcha, SignUpContainer } from './SignUpWrapper.styled';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const recaptchaImage = '/recaptcha.png';

const ErrorDisplay: React.FC<{ error: string | undefined }> = ({ error }) => {
  return error ? (
    <div className="error" style={{ color: 'red', fontWeight: '500' }}>
      {error}
    </div>
  ) : null;
};

export const SignUpForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      checkbox: false,
      email: '',
      repassword: '',
    },
    validationSchema: SignUpValidations,
    onSubmit: (values) => {},
  });

  const handleCheckboxClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsChecked(true);
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handelSubmit = () => {};

  const navigateToLogin = () => {
    navigate('');
  };

  return (
    <SignUpContainer>
      <form onSubmit={formik.handleSubmit}>
        <h1>Sign Up</h1>
        <StyledFormItem className="form-label">
          Username
          <StyledSimpleInput
            required
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="input_box"
            placeholder="Username"
            prefix={<FaUser className="icon" />}
          />
          <ErrorDisplay error={formik.errors.username} />
        </StyledFormItem>
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
            placeholder="Username"
            prefix={<MdEmail className="icon" />}
          />
          <ErrorDisplay error={formik.errors.email} />
        </StyledFormItem>
        <StyledFormItem className="form-label">
          Password
          <StyledSimpleInput
            required
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
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
          <ErrorDisplay error={formik.errors.password} />
        </StyledFormItem>
        <StyledFormItem className="form-label">
          Re- Password
          <StyledSimpleInput
            required
            type={passwordVisible ? 'text' : 'password'}
            id="repassword"
            name="repassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repassword}
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
            placeholder="Re- Password"
            prefix={<IoMdLock className="icon-pass" />}
          />
          <ErrorDisplay error={formik.errors.repassword} />
        </StyledFormItem>
        <Captcha>
          <div className="left-captcha">
            {!isLoading && !isChecked && (
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  style={{
                    width: '35px',
                    height: '35px',
                    marginRight: '10px',
                  }}
                  onClick={handleCheckboxClick}
                  required
                  checked={formik.values.checkbox}
                />
              </div>
            )}
            {isLoading && (
              <div className="spinner-container">
                <div className="spinner"></div>
              </div>
            )}
            {isChecked && (
              <div style={{ color: 'green', fontSize: '35px' }}>✔</div>
            )}
            I'm not a robot
          </div>
          <img src={recaptchaImage} alt="Recaptcha" />
        </Captcha>
        {!isChecked ? <ErrorDisplay error={formik.errors.checkbox} /> : null}
        <Button
          className="login-buttons"
          type="primary"
          htmlType="submit"
          onClick={handelSubmit}
        >
          Sign Up
        </Button>
        <p>
          Already have an Account? <a onClick={navigateToLogin}>Sign In</a>
        </p>
      </form>
    </SignUpContainer>
  );
};
