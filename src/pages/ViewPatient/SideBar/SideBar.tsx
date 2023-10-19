import Icon from '@ant-design/icons';
import { Typography } from 'antd';
import React, { useState, FC, SetStateAction, Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetPatient } from '../../CreatePatient/Types';
import { ViewPatientSidebarWrapper } from './SideBar.styled';

export interface SideBarProps {
  patient?: Partial<GetPatient>;
  patientId?: string;
  activeTab: string | null;
  setActiveTab: Dispatch<SetStateAction<string | null>>;
}

export const SideBar: FC<SideBarProps> = ({
  patient,
  patientId,
  activeTab,
  setActiveTab,
}) => {
  // const profileImg = '../public/male.png';

  const lists = [
    {
      icon: '/patients/allergies.svg',
      name: 'Allergies',
      tabName: 'allergies',
      onClick: () => setActiveTab('allergies'),
    },
    {
      icon: '/patients/vaccines.svg',
      name: 'Vaccines & T.Inj',
      tabName: 'vaccines',
      onClick: () => setActiveTab('vaccines'),
    },
    {
      icon: '/patients/visits.svg',
      name: 'Visits',
      tabName: 'visits',
      onClick: () => setActiveTab('visits'),
    },
    {
      icon: '/patients/meds.svg',
      name: 'Meds',
      tabName: 'meds',
      onClick: () => setActiveTab('meds'),
    },
    {
      icon: '/patients/labs-procedures.svg',
      name: 'Labs & Procedures',
      tabName: 'labs',
      onClick: () => setActiveTab('labs'),
    },
    {
      icon: '/patients/results-vitals.svg',
      name: 'Vitals',
      tabName: 'vitals',
      onClick: () => setActiveTab('vitals'),
    },
    {
      icon: '/patients/referrals.svg',
      name: 'Referrals',
      tabName: 'referrals',
      onClick: () => setActiveTab('referrals'),
    },
    {
      icon: '/patients/history.svg',
      name: 'History',
      tabName: 'history',
      onClick: () => setActiveTab('history'),
    },
  ];

  const returnProfileImageSrc = (): string => {
    if (patient?.profileImage) {
      return `data:image;base64,${patient?.profileImage}`;
    }
    if (patient?.gender === 'Female') return '/female.png';
    return '/male.png';
  };

  return (
    <ViewPatientSidebarWrapper className="view-Patient-sidebar-wrapper">
      <img
        src={returnProfileImageSrc()}
        className="profile-image"
        alt="patient-profile"
      />
      <div className="sidebar-list-wrapper">
        {lists?.map((list) => (
          <div
            className={`sidebar-list ${
              activeTab === list.tabName ? 'active' : ''
            }`}
            key={list.name}
            onClick={list.onClick}
          >
            <img src={list.icon} className="list-icon" alt={list.name} />
            <Typography className="name">{list.name}</Typography>
          </div>
        ))}
      </div>
    </ViewPatientSidebarWrapper>
  );
};
