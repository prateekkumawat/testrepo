import { Typography, Button } from 'antd';
import moment from 'moment';
import React, { FC } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import { DateFormats } from '../../../Types/Types';

interface ScheduleDeailRowProps {
  index: number | string;
  firstValue: string;
  startDate: string;
  endDate: string;
  btnText: string;
  btnClick: (id: string | number) => void;
  editClick: (id: string | number) => void;
}
export const ScheduleDeailRow: FC<ScheduleDeailRowProps> = ({
  index,
  firstValue,
  startDate,
  endDate,
  btnText,
  btnClick,
  editClick,
}) => {
  return (
    <div
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      className="individual-row"
    >
      <Typography className="first-value">{firstValue}</Typography>
      <Typography className="middle-value">
        {moment(new Date(startDate)).format(DateFormats.MonthDayYear)} to{' '}
        {moment(new Date(endDate)).format(DateFormats.MonthDayYear)}
      </Typography>
      <div className="last-value">
        <Button
          onClick={() => {
            btnClick(index);
          }}
          className={btnText?.toLowerCase()}
        >
          {btnText}
        </Button>
        <BsPencilFill className="edit-icon" onClick={() => editClick(index)} />
      </div>
    </div>
  );
};
