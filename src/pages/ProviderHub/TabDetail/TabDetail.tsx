import { Button, Card, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { ProviderAppointment } from '../ProviderAppointment/ProviderAppointment';
import { ProviderAvailablity } from '../ProviderAvailablity/ProviderAvailablity';
import { TabNames, TabValues } from '../types';
import { StyledTabDetail } from './TabDetail.styled';

export interface TabDetailProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  setActiveTabValue: Dispatch<SetStateAction<TabValues | undefined>>;
  selectedDate: null | string;
  setSelectedDate: Dispatch<SetStateAction<null | string>>;
}

export const TabDetail: FC<TabDetailProps> = ({
  activeTab,
  setActiveTab,
  setActiveTabValue,
  selectedDate,
  setSelectedDate,
}) => {
  const tabClick = (e: string) => {
    setActiveTab(e);
  };

  const tabList = [
    TabNames.Appointment,
    TabNames.PatientInsight,
    TabNames.TasksActions,
    TabNames.Communication,
    TabNames.YourAvailability,
    TabNames.BillingCoding,
  ];
  const getTabUI = (tab: string) => {
    switch (tab) {
      case TabNames.Appointment:
        return (
          <ProviderAppointment
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        );
      case TabNames.PatientInsight:
        return <p>{tabList[1]}</p>;
      case TabNames.TasksActions:
        return <p>{tabList[2]}</p>;
      case TabNames.Communication:
        return <p>{tabList[3]}</p>;
      case TabNames.YourAvailability:
        return <ProviderAvailablity setActiveTab={setActiveTabValue} />;
      case TabNames.BillingCoding:
        return <p>{tabList[5]}</p>;
      default:
        return <p>empty</p>;
    }
  };

  return (
    <StyledTabDetail>
      <Typography className="hub-title">Welcome Back,</Typography>
      <Typography className="hub-sub-title">Mayur Nandu</Typography>
      <Row className="tab-names">
        {tabList?.map((e, index) => (
          <>
            <Row>
              <Typography
                onClick={() => tabClick(e)}
                className={`tab-name ${activeTab === e ? 'active1' : ''}`}
              >
                {e}
                <span className={activeTab === e ? 'active' : ''} />
              </Typography>
            </Row>
            {index !== tabList.length - 1 ? (
              <span className="separator">|</span>
            ) : null}
          </>
        ))}
      </Row>
      <Card className="tab-details-card">{getTabUI(activeTab)}</Card>
    </StyledTabDetail>
  );
};
