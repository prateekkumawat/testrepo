import React, { FC, useState } from 'react';
import { Row } from 'antd';
import { FaSearch } from 'react-icons/fa';

import { MainHeaderWrapper } from './Header.Styled';

export const Header: FC = () => {
  const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false);
  const [isProductOpen, setIsProductOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const toggleServiceDropdown = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductOpen(!isProductOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <MainHeaderWrapper className="main-header-wrapper">
      <div className="header-container">
        <div className="main-logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="middle-menus-wrapper">
          <a className="Home">Home</a>
          <a className="About">About</a>
          <div
            className={`Dropdown ${isServiceOpen ? 'active' : ''}`}
            onClick={toggleServiceDropdown}
          >
            <span className="DropdownIcon">&#9662;</span>
            <a className="Service">Service</a>
            {isServiceOpen && (
              <div className="Dropdown-content">
                <a href="#">Service1 </a>
                <a href="#">Service2 </a>
                <a href="#">Service3 </a>
              </div>
            )}
          </div>
          <div
            className={`Dropdown ${isProductOpen ? 'active' : ''}`}
            onClick={toggleProductDropdown}
          >
            <span className="DropdownIcon">&#9662;</span>
            <a className="Product">Product</a>
            {isProductOpen && (
              <div className="Dropdown-content">
                <a href="#">Product1 </a>
                <a href="#">Product2 </a>
                <a href="#">Product3 </a>
              </div>
            )}
          </div>
          <a className="Contact">Contact</a>
        </div>
        <div className="right-menus-wrapper">
          <div className="search-bar">
            <div className="form-outline">
              <input type="search" className="search" />
            </div>
            <button type="button" className="btn">
              <FaSearch className="icon" />
            </button>
            <button type="button" className="btn-2">
              Support Now
            </button>
          </div>
        </div>
      </div>
    </MainHeaderWrapper>
  );
};
