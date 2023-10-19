import React, { useState } from 'react';
import { Button, Row } from 'antd';
import { AccountBlockedWrapper } from './AccountBlocked.styled';

export const AccountBlocked: React.FC = () => {
  const blockedImage = './Blocked.png';
  return (
    <AccountBlockedWrapper>
      <img
        src={blockedImage}
        alt="BlockedImage"
        className="successfull-login-img"
      />
      <h2>Account Block!</h2>
      <p>
        Your account has been locked due to 3 failed attempts. it will be
        unlocked after 24 hours. connect support for admin.
      </p>
      <Button className="login-buttons">Support</Button>
    </AccountBlockedWrapper>
  );
};
