import React, { FC, SetStateAction, Dispatch } from 'react';
import { LeaveApplication } from '../LeaveApplication/LeaveApplication';
import { WorkingHourForm } from '../WorkingHourForm/WorkingHourForm';
import { TabValues } from '../types';

import { MonthlyCalendar } from '../MonthlyCalendar/MonthlyCalendar';

export interface AvailablityViewProps {
  className?: string;
  activeTabValue: string | undefined;
  setActiveTabValue: Dispatch<SetStateAction<TabValues | undefined>>;
  providerId: string;
}

export const CustomDateHeader = () => {
  return <div />;
};
export const AvailablityView: FC<AvailablityViewProps> = ({
  className,
  providerId,
  activeTabValue,
  setActiveTabValue,
}) => {
  if (activeTabValue === TabValues.LEAVE) {
    return (
      <LeaveApplication
        providerId={providerId}
        className={className}
        onClose={() => setActiveTabValue(undefined)}
      />
    );
  }
  if (activeTabValue === TabValues.WORKING_HOURS) {
    return (
      <WorkingHourForm
        providerId={providerId}
        className={className}
        onClose={() => setActiveTabValue(undefined)}
      />
    );
  }
  if (activeTabValue === TabValues.MONTLY_CALENDAR) {
    return <MonthlyCalendar />;
  }
  return <p />;
};
