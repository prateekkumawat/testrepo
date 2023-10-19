import { Typography } from 'antd';
import React, { FC } from 'react';
import { RxClock } from 'react-icons/rx';
import { AppointmentWrapper } from './Appointment.styled';

export interface AppointmentProps {
  className?: string;
  name: string;
  mobile: string;
  startTime: string;
  endTime: string;
  onClick: (val?: any) => void;
  status: string;
  timeSolt: number;
}
export const Appointment: FC<AppointmentProps> = ({
  endTime,
  mobile,
  timeSolt,
  name,
  startTime,
  className,
  onClick,
  status,
}) => {
  const formattedStartTime = startTime.substring(0, 5);
  const formattedEndTime = endTime.substring(0, 5);

  let appointmentTimeMobStyles,
    appointmentStyles = {};
  if (timeSolt <= 15) {
    appointmentStyles = { marginTop: '1px' };
    appointmentTimeMobStyles = { fontSize: '0.6em', maxHeight: 'fit-content' };
  } else if (timeSolt <= 30) {
    appointmentStyles = { marginTop: '5px' };
    appointmentTimeMobStyles = { fontSize: '0.6em' };
  } else if (timeSolt <= 45) {
    appointmentStyles = {  marginTop: '8px'};
    appointmentTimeMobStyles = { fontSize: '0.7em' };
  } else if (timeSolt <= 60) {
    appointmentStyles = { display: 'flex', flexDirection: 'column',marginTop: '12px'};
    appointmentTimeMobStyles = { fontSize: '0.7em' };
  } else {
    appointmentStyles = { display: 'flex', flexDirection: 'column', marginTop: '15px'};
    appointmentTimeMobStyles = { fontSize: '0.7em' };
  }

  return (
    <AppointmentWrapper
      className={`${className} ${status?.toLowerCase().split(' ').join('-')}`}
      onClick={onClick}
    >
      <div className="details" style={appointmentStyles}>
        <Typography className="patient-name">{name}</Typography>
        {timeSolt < 16 || timeSolt > 31 ? (
          <Typography className="patient-mob" style={appointmentTimeMobStyles}>
            Mob: {mobile}
          </Typography>
        ) : null}
        <Typography
          className="appointment-time"
          style={appointmentTimeMobStyles}
        >
          <RxClock />
          {formattedStartTime} - {formattedEndTime}
        </Typography>
      </div>
    </AppointmentWrapper>
  );
};
