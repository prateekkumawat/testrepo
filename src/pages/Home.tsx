import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '../Routes/Routes';

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(RoutesPath.CREATE_PATIENT);
  }, []);

  return (
    <Spin
      style={{
        display: 'grid',
        placeContent: 'center',
        width: '100%',
        height: '100vh',
      }}
      size="large"
    />
  );
};
