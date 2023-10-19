import { Card, Row, Typography } from 'antd';
import React, { FC, ReactNode } from 'react';
import { TabCardWrapper } from './TabCard.styled';

export interface TabCardProps {
  title: string;
  icon: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export const TabCard: FC<TabCardProps> = ({
  title,
  icon,
  className = '',
  onClick,
}) => {
  return (
    <TabCardWrapper className={` ${className}`} onClick={onClick}>
      <div className="card-body d-flex justify-content-center align-items-center flex-column">
        <div className="icon">{icon}</div>
        <p className="title">{title}</p>
      </div>
    </TabCardWrapper>
  );
};
