import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { IoCalendarOutline, IoSettingsOutline } from 'react-icons/io5';
import { FaHandHoldingMedical, FaStethoscope } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { MdHub, MdLogout } from 'react-icons/md';
import { RoutesPath } from '../../Routes/Routes';
import { AppSidebar } from './SideBar.styled';
import { theme } from '../../Theme/theme';
import { useAppDispatch } from '../../Store/Store';
import { logout } from '../../Store/Slice/User.slice';
import soapNotes from '../../../public/SaopNotesLogo.svg';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    'Schedule',
    'Schedule',
    <div className="">
      <IoCalendarOutline className="menu-icons" />
    </div>
  ),
  getItem(
    'Patient',
    'Patient',
    <div className="">
      <FaHandHoldingMedical className="menu-icons" />
    </div>
  ),
  // getItem(
  //   'document',
  //   'document',
  //   <div className="">
  //     <FaRegFileLines className="menu-icons" />
  //   </div>,
  //   [
  //     getItem('Option 3', '3'),
  //     getItem('Option 4', '4'),
  //     getItem('Submenu', 'sub1-2', null, [
  //       getItem('Option 5', '5'),
  //       getItem('Option 6', '6'),
  //     ]),
  //   ]
  // ),
  getItem(
    'Provider',
    'Provider',
    <div className="">
      <FaStethoscope className="menu-icons" />
    </div>
  ),
  getItem(
    'Reports',
    'Reports',
    <div className="">
      <BiSolidBarChartAlt2 className="menu-icons" />
    </div>
  ),
  getItem(
    'SoapNotes',
    'SoapNotes',
    <div className="menu-icon-wrapper">
      {/* <img src={soapNotes} alt="SoapNotes" className="menu-icons" /> */}
      <MdHub className="menu-icons" />
    </div>,
    [
      getItem('ICD/CPT Codes', 'icdcptcodes'),
      getItem('SOAP Templates', 'soapTemplates'),
    ]
  ),
  getItem(
    'settings',
    'settings',
    <div className="">
      <IoSettingsOutline className="menu-icons" />
    </div>
  ),
  getItem(
    'logout',
    'logout',
    <div className="">
      <MdLogout className="menu-icons" />
    </div>
  ),
];

export const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClick = (value: any) => {
    switch (value.key) {
      case 'Schedule':
        return navigate(RoutesPath.GET_ALL_SCHEDULE);
      case 'Patient':
        return navigate(RoutesPath.CREATE_PATIENT);
      case 'Provider':
        return navigate(RoutesPath.CREATE_PROVIDER);
      case 'icdcptcodes':
        return navigate(RoutesPath.ICDCPT_Codes);
      case 'Reports':
        return '';
      case 'soapTemplates':
        return navigate(RoutesPath.SOAP_NOTES);
      case 'Settings':
        return '';
      case 'logout':
        return (() => {
          dispatch(logout());
          navigate(RoutesPath.LOGIN);
        })();
      default:
        return '';
    }
  };

  return (
    <AppSidebar>
      <Menu
        className="app-sidebar"
        onClick={onClick}
        mode="vertical"
        theme="dark"
        inlineCollapsed
        items={items}
        // overflowedIndicator={<></>}
        style={{ backgroundColor: theme.secondary.main }}
      />
    </AppSidebar>
  );
};
