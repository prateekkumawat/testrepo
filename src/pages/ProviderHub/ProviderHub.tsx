import { notification } from 'antd';
import dayjs from 'dayjs';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProviderService } from '../../Service/Provider';
import { AvailablityView } from './AvailablityView/AvailablityView';
import { ProductDetailsWrapper } from './ProviderHub.styled';
import { ProviderSchedule } from './ProviderSchedule/ProviderSchedule';
import { TabDetail } from './TabDetail/TabDetail';
import { TabValues } from './types';

interface ProviderHubProps {
  className?: string;
}
export const ProviderHub: FC<ProviderHubProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('Appointment');
  const [activeTabValue, setActiveTabValue] = useState<TabValues | undefined>();
  const [providerId, setProviderId] = useState<string>('');
  const [providerSchedule, setProviderSchedule] = useState<Array<any>>([]);
  const params = useParams();
  const providerService = ProviderService();
  const [selectedDate, setSelectedDate] = useState<null | string>(null);

  useEffect(() => {
    if (!providerId && params.providerId) {
      setProviderId(params.providerId);
    }
  }, [params.providerId]);

  useEffect(() => {
    const getProviderSchedule = async () => {
      try {
        const data = await providerService.getProviderSchedule(providerId);
        setProviderSchedule(data);
      } catch (err: any) {
        notification.error(err?.response || 'Error occured while getSchedue');
      }
    };
    if (providerId && !providerSchedule?.length) getProviderSchedule();
  }, [providerId]);

  const getUI = () => {
    switch (activeTab) {
      case 'Appointment': {
        return (
          <ProviderSchedule
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        );
      }
      case 'your Availability': {
        return (
          <AvailablityView
            activeTabValue={activeTabValue}
            setActiveTabValue={setActiveTabValue}
            providerId={providerId}
          />
        );
      }
      default: {
        return <>emp</>;
      }
    }
  };
  return (
    <ProductDetailsWrapper>
      <div className="half-section tab-details-wrapper">
        <TabDetail
          setActiveTabValue={setActiveTabValue}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div className="half-section tab-value-wrapper">{getUI()}</div>
    </ProductDetailsWrapper>
  );
};
