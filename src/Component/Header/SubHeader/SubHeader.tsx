import React, { FC } from 'react';
import { MdAlternateEmail, MdOutlineContactSupport } from 'react-icons/md';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { BsNewspaper, BsTelephoneFill } from 'react-icons/bs';
import { Typography } from 'antd';
import { RiAccountCircleLine } from 'react-icons/ri';
import { SubHeaderWrapper } from './SubHeader.Styled';

export const SubHeader: FC = () => {
  return (
    <SubHeaderWrapper>
      <div className="icon-set">
        <BiLogoLinkedinSquare />
        <MdAlternateEmail />
        <BsTelephoneFill />
        <Typography>+1 102 345 6789</Typography>
      </div>
      <div className="right-side-wrapper">
        <div className="icon-text-set">
          <BsNewspaper />
          <Typography>News Update</Typography>
        </div>
        <div className="icon-text-set">
          <MdOutlineContactSupport />
          <Typography>Support</Typography>
        </div>
        <div className="icon-text-set">
          <RiAccountCircleLine />
          <Typography>Account</Typography>
        </div>
      </div>
    </SubHeaderWrapper>
  );
};
