import React, { FC } from 'react';
import { DateHeaderProps } from 'react-big-calendar';

export const DateHeader: FC<DateHeaderProps> = ({
  label,
  drilldownView,
  onDrillDown,
  ...props
}) => {
  return (
    <div className="custom-date-header">
      <div className="dh-item header-right">{label}</div>
    </div>
  );
};

export const DateCellWrapper: FC<any> = (props) => {
  return (
    <div
      className="custom-date-header"
      style={{
        border: `${
          new Date(props.value).getDate() === new Date().getDate()
            ? '1px solid green'
            : '1px solid lightgrey'
        }`,
        width: '100%',
        margin: '5px',
        borderRadius: '10px',
      }}
    />
  );
};
