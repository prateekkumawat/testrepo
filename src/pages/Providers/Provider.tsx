import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Typography } from 'antd';
import { ProviderNavTabs } from './ProviderNavTabs/ProviderNavTabs';
import { ProviderTabs } from './types';
import { StyledPRoviderWrapper } from './Provider.styled';
import { toPascalCase } from '../../utility';

export const Provider: FC = () => {
  const [currentTab, setCurrentTab] = useState<ProviderTabs>(
    ProviderTabs.ADD_PROVIDER
  );
  return (
    <StyledPRoviderWrapper className="provider-wrapper">
      <div className="provider-header-wrapper">
        <div className="provider-header">
          <Typography className="header-title">
            {toPascalCase(currentTab).split('_').join(' ')}
          </Typography>
          <ProviderNavTabs
            className="provider-tabs"
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>
      </div>
      <Outlet />
    </StyledPRoviderWrapper>
  );
};
