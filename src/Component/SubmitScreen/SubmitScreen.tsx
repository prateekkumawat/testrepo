import { Button, Row, Typography } from 'antd';
import React, { FC } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { SecondaryButton } from '../Button/Button';
import { SimpleCard } from '../Card/Card';
import { SubmitWrapper } from './SubmitScreen.styled';

export interface SubmitScreenProps {
  infoMsg1: string;
  infoMsg2: string;
  addButton: {
    text: string;
    onClick: () => void;
  };
}
export const SubmitScreen: FC<SubmitScreenProps> = ({
  infoMsg1,
  infoMsg2,
  addButton,
}) => {
  const navigate = useNavigate();
  return (
    <SubmitWrapper className="submit-patient-wrapper">
      <Row className="banner">
        <BsFillCheckCircleFill className="tick-ion" />
        <Typography className="title1">Thank You !</Typography>
        <Typography className="title2">{infoMsg1}</Typography>
      </Row>
      <SimpleCard className="mini-banner">
        <Typography className="info-text">{infoMsg2}</Typography>
        <div className="nav-buttons">
          <Button
            type="primary"
            size="large"
            onClick={() => {
              navigate('../../');
            }}
          >
            Home
          </Button>
          <SecondaryButton
            className="secondary-button"
            size="large"
            onClick={() => {
              addButton.onClick();
            }}
          >
            {addButton.text}
          </SecondaryButton>
        </div>
      </SimpleCard>
    </SubmitWrapper>
  );
};
