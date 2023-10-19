import React, { FC, useState } from 'react';
import { BiSupport } from 'react-icons/bi';
import { Card } from 'antd';
import {
  MainContainer,
  Container1,
  Text,
  Container2,
  Container3,
  Container4,
} from './LoginWrapper.styled';
import LoginForm from './LoginForm/Loginform';
import { ForgotPassword } from './ForgotPassword/ForgotPassword';
import { LoginPages } from './utility';
import { SuccessfullLogin } from './SuccesfullLogin/SuccessfullLogin';
import { ChangePassword } from './ChangePassword/ChangePassword';
import { OYPVerification } from './OTPVerification/OtpVerification';
import { PasswordChanged } from './SucessfullPasswordChange/PasswordChanged';

const image1 = '/LoginPicture.png';

export const LoginPage: FC = () => {
  const [activeTab, setActiveTab] = useState<LoginPages>(LoginPages.LOGIN);
  const [username, setUsername] = useState<string>('');
  return (
    <MainContainer>
      <Container1>
        <Text>
          <h1 className="p_1">What is Lorem Ipsum?</h1>
          <h4 className="p_2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
          </h4>
        </Text>
      </Container1>
      <Container2>
        <img src={image1} alt="Image1" className="ogin-picture" />
      </Container2>
      <Container4>
        {activeTab === LoginPages?.LOGIN ? (
          <LoginForm setActiveTab={setActiveTab} />
        ) : null}
        {activeTab === LoginPages?.FORGOT_PASSWORD ? (
          <Card>
            <ForgotPassword
              setActiveTab={setActiveTab}
              setUsername={setUsername}
            />
          </Card>
        ) : null}
        {activeTab === LoginPages?.SUCCESSFULL_LOGIN ? (
          <Card>
            <SuccessfullLogin />
          </Card>
        ) : null}
        {activeTab === LoginPages?.CHANGE_PASSWORD ? (
          <Card>
            <ChangePassword setActiveTab={setActiveTab} username={username} />
          </Card>
        ) : null}
        {activeTab === LoginPages?.SUCCESSFULLY_CHANGED_PASSWORD ? (
          <Card>
            <PasswordChanged setActiveTab={setActiveTab} />
          </Card>
        ) : null}
        {activeTab === LoginPages?.VALIDATE_OTP ? (
          <Card>
            <OYPVerification username={username} setActiveTab={setActiveTab} />
          </Card>
        ) : null}
      </Container4>
      <Container3>
        <button className="footer-support-bttns" type="button">
          <BiSupport className="icon-support" />
        </button>
      </Container3>
    </MainContainer>
  );
};
