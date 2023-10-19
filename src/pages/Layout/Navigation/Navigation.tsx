import { Card, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import {
  IoCreateOutline,
  IoSearchOutline,
  IoSparkles,
  IoOptions,
} from 'react-icons/io5';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { TabCard } from '../../../Component/TabCard/TabCard';
import { ShadowedCard } from '../../../Component/Card/Card';
import { RoutesPath } from '../../../Routes/Routes';
import { TabsWrapper } from './Navigation.styled';

// const StyledCard = styled(Card)`
//   display: flex;
//   justify-content: space-between;
//   .ant-card-body {
//     display: flex;
//     justify-content: space-between;
//     flex-direction: row;
//     width: 100%;
//     border-radius: 15px;
//     background: #f4f6f8;
//     box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
//   }
// `;

export const Navigation: FC = () => {
  const s = useLocation();
  console.log('s', s);

  const navigate = useNavigate();
  const Tabs = [
    {
      id: 'patientCreation',
      className: ``,
      title: 'Patient Creation',
      icon: <IoCreateOutline />,
      key: RoutesPath.CREATE_PATIENT,
    },
    {
      id: 'searchPatient',
      className: ``,
      title: 'Search Patient',
      icon: <IoSearchOutline />,
      key: RoutesPath.GET_ALL_PATIENT,
    },
    {
      id: 'searchPatient1',
      className: ``,
      title: 'Search History',
      icon: <IoSparkles />,
    },
    {
      id: 'searchPatient2',
      className: ``,
      title: 'Patient View',
      icon: <IoOptions />,
    },
    {
      id: 'searchPatient3',
      className: ``,
      title: 'Doctor Creation',
      icon: <IoCreateOutline />,
    },
    {
      id: 'searchPatient4',
      className: ``,
      title: 'Doctor Creation',
      icon: <IoCreateOutline />,
    },
  ];

  return (
    <div className="card bg-gray-100">
      <div className="card-body">
        <TabsWrapper>
          {Tabs?.map((tab) => (
            <TabCard
              key={tab.id}
              className={` card
              ${tab.className} 
              ${s?.pathname === tab.key ? 'active' : ''}`}
              title={tab.title}
              icon={tab.icon}
              onClick={() => {
                navigate(tab.key || '/');
              }}
            />
          ))}
        </TabsWrapper>
      </div>
    </div>
  );
};
