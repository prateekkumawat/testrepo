import React, { Dispatch, SetStateAction } from 'react';
import { Button } from 'antd';
import { PasswordChangedWrapper } from './PasswordChangedWrapper.styled';
import { LoginPages } from '../utility';

export const PasswordChanged: React.FC<{
  setActiveTab: Dispatch<SetStateAction<LoginPages>>;
}> = ({ setActiveTab }) => {
  const successfullLogin = './successfullLogin.png';

  return (
    <PasswordChangedWrapper>
      <form>
        <img
          src={successfullLogin}
          alt="SuccessfullLogin"
          className="successfull-login-img"
        />
        <h2>Password Changed!</h2>
        <p>Your password has been changed successfully. </p>
        <Button
          className="login-buttons"
          onClick={() => {
            setActiveTab(LoginPages.LOGIN);
          }}
        >
          Login
        </Button>
      </form>
    </PasswordChangedWrapper>
  );
};
