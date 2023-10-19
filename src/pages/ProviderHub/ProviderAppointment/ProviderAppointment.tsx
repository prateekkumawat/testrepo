import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { notification } from 'antd';
import { ProviderAppointmentWrapper } from './ProviderAppointment.styled';
import { AppointmentLabel, Appointments } from '../../../Types/Enum';
import { colorCodes } from '../../../utility';
import { ProviderService } from '../../../Service/Provider';
import { AppointmentService } from '../../../Service/Appointment';

export interface ProviderAppointmentProps {
  className?: string;
  selectedDate: null | string;
  setSelectedDate: Dispatch<SetStateAction<null | string>>;
}
export const ProviderAppointment: FC<ProviderAppointmentProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  console.log('selectedDate', selectedDate);

  const list = [
    {
      count: '100',
      label: AppointmentLabel.Confirmed,
      value: Appointments.Confirmed,
    },
    {
      count: '10',
      label: AppointmentLabel.Rescheduled,
      value: Appointments.Rescheduled,
    },
    {
      count: '10',
      label: AppointmentLabel.Unconfirmed,
      value: Appointments.Unconfirmed,
    },
    {
      count: '10',
      label: AppointmentLabel.Canceled,
      value: Appointments.Canceled,
    },
    {
      count: '10',
      label: AppointmentLabel['Checked-In'],
      value: Appointments['Checked-In'],
    },
    {
      count: '10',
      label: AppointmentLabel['Checked Out'],
      value: Appointments['Checked Out'],
    },
    {
      count: '100',
      label: AppointmentLabel['No-Show'],
      value: Appointments['No-Show'],
    },
  ];

  return (
    <ProviderAppointmentWrapper>
      {list.map((elem) => (
        <div className="count-row" key={elem.label}>
          <div
            className="count-div"
            style={{ backgroundColor: colorCodes[elem.value] }}
          >
            {elem?.count}
          </div>
          <p>{elem?.label}</p>
        </div>
      ))}
    </ProviderAppointmentWrapper>
  );
};
