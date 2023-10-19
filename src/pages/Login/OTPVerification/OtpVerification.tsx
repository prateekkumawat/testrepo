import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, notification, Row, Spin } from 'antd';
import {
  StyledFormItem,
  StyledSimpleInput,
} from '../../../Component/Form/Form';
import { OTPVerificationWrapper } from './OTPVerificationWrapper.styled';
import { LoginService } from '../../../Service/Login';
import { LoginPages } from '../utility';

export const OYPVerification: React.FC<{
  username: string;
  setActiveTab: Dispatch<SetStateAction<LoginPages>>;
}> = ({ username, setActiveTab }) => {
  const [loader, setLoader] = useState<boolean>(false);
  const [resendLoader, setResendLoader] = useState<boolean>(false);
  const [otp, setOTP] = useState<string[]>([]);
  const loginService = LoginService();

  const handleSubmit = async () => {
    try {
      setLoader(true);
      await loginService.submitOTP({
        username,
        otpNumber: otp.join(''),
      });
      setLoader(false);
      setActiveTab(LoginPages.CHANGE_PASSWORD);
    } catch (err: any) {
      setLoader(false);
      notification.error({
        message: err?.response || 'Error Occured',
      });
    }
  };

  const resendOtp = async () => {
    try {
      if (resendLoader) return;
      setResendLoader(true);
      await loginService.sendOTP(username);
      setResendLoader(false);
    } catch (err: any) {
      setResendLoader(false);
      console.log('handleSubmit -> err', err);
      notification.error({
        message: err?.response || 'Error Occured',
      });
    }
  };

  return (
    <OTPVerificationWrapper>
      <form>
        <h1>OTP Verification</h1>
        <p className="above-text">Enter the OTP sent to your email id</p>
        <StyledFormItem className="form-label">
          OTP
          <Row className="otp">
            <StyledSimpleInput
              name="otp-1"
              required
              type="text"
              className="otp_input_box"
              maxLength={1}
              onChange={(e) => {
                setOTP((prev: string[]) => {
                  prev[0] = e.target.value;
                  return [...prev];
                });
              }}
            />
            <StyledSimpleInput
              name="otp-2"
              required
              type="text"
              className="otp_input_box"
              maxLength={1}
              onChange={(e) => {
                setOTP((prev: string[]) => {
                  prev[1] = e.target.value;
                  return [...prev];
                });
              }}
            />
            <StyledSimpleInput
              name="otp-3"
              required
              type="text"
              className="otp_input_box"
              maxLength={1}
              onChange={(e) => {
                setOTP((prev: string[]) => {
                  prev[2] = e.target.value;
                  return [...prev];
                });
              }}
            />
            <StyledSimpleInput
              name="otp-4"
              required
              type="text"
              className="otp_input_box"
              maxLength={1}
              onChange={(e) => {
                setOTP((prev: string[]) => {
                  prev[3] = e.target.value;
                  return [...prev];
                });
              }}
            />
            <StyledSimpleInput
              name="otp-5"
              required
              type="text"
              className="otp_input_box"
              maxLength={1}
              onChange={(e) => {
                setOTP((prev: string[]) => {
                  prev[4] = e.target.value;
                  return [...prev];
                });
              }}
            />
            <StyledSimpleInput
              name="otp-6"
              required
              type="text"
              className="otp_input_box"
              maxLength={1}
              onChange={(e) => {
                setOTP((prev: string[]) => {
                  prev[5] = e.target.value;
                  return [...prev];
                });
              }}
            />
          </Row>
        </StyledFormItem>

        <Button
          className="login-buttons"
          type="primary"
          loading={loader}
          onClick={handleSubmit}
        >
          Verify
        </Button>
        <p className="bottom-text" onClick={() => resendOtp()}>
          Didn't Recieve The OTP?{' '}
          <span style={{ color: 'blue', cursor: 'pointer' }}>Resend OTP</span>
          {resendLoader ? <Spin /> : null}
        </p>
      </form>
    </OTPVerificationWrapper>
  );
};
