import { Card } from 'antd';
import styled, { useTheme } from 'styled-components';
import React from 'react';

export const ShadowedCard = styled(Card)`
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const SimpleCard = styled(Card)`
  border-radius: 0;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 10px 0;
`;
