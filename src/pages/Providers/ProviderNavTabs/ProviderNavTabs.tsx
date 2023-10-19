import { Button } from 'antd';
import React, { FC, SetStateAction, Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButtonGroup } from '../../../Component/Button/Button';
import { RoutesPath } from '../../../Routes/Routes';
import { toPascalCase } from '../../../utility';
import { ProviderTabs } from '../types';
import { ProviderTabWrapper } from './ProviderNavTabs.styled';

export interface ProviderNavTabsProps {
  setCurrentTab: Dispatch<SetStateAction<ProviderTabs>>;
  currentTab: ProviderTabs;
  className?: string;
}
export const ProviderNavTabs: FC<ProviderNavTabsProps> = ({
  setCurrentTab,
  currentTab,
  className,
}) => {
  const KeyPathMap = {
    [ProviderTabs.ADD_PROVIDER]: RoutesPath.CREATE_PROVIDER,
    [ProviderTabs.GET_ALL_PROVIDERS]: RoutesPath.GET_ALL_PROVIDER,
    // [ProviderTabs.PROVIDER_DETAILS]: RoutesPath.GET_PROVIDER_BY_ID,
  };
  const navigate = useNavigate();
  return (
    <ProviderTabWrapper className={`provider-tab-wrapper ${className}`}>
      <StyledButtonGroup size="large" className="btn-group">
        {Object.keys(ProviderTabs).map((key) => (
          <Button
            size="large"
            key={key}
            type={`${key === currentTab ? 'primary' : 'default'}`}
            onClick={() => {
              setCurrentTab(key as ProviderTabs);
              navigate(KeyPathMap[key as keyof typeof KeyPathMap]);
            }}
          >
            {toPascalCase(key).split('_').join(' ')}
          </Button>
        ))}
      </StyledButtonGroup>
    </ProviderTabWrapper>
  );
};
