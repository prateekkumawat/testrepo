import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SuccessfullLoginWrapper } from './SuccessfullLoginWrapper.styled';
import { RoutesPath } from '../../../Routes/Routes';
import { UserAuth, UserAuthSelector } from '../../../Store/Slice/User.slice';

interface SuccessFulPorp {
  className?: string;
}

export const SuccessfullLogin: React.FC<SuccessFulPorp> = ({ className }) => {
  const navigate = useNavigate();
  const userAuth: UserAuth = useSelector(UserAuthSelector);
  console.log('userAuth', userAuth);

  const handleGoHomeClick = () => {
    navigate(RoutesPath.CREATE_PATIENT);
  };

  const successfullLogin = './successfullLogin.png';

  return (
    <SuccessfullLoginWrapper className={className}>
      <form>
        <img
          src={successfullLogin}
          alt="SuccessfullLogin"
          className="successfull-login-img"
        />
        <h2>Signin successfully</h2>
        <p>It might take a few seconds for your device to refresh</p>
        <Button className="login-buttons" onClick={handleGoHomeClick}>
          Go Home
        </Button>
      </form>
    </SuccessfullLoginWrapper>
  );
};
