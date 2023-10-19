import { Button, DatePicker, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { SecondaryButton } from '../../Component/Button/Button';
import {
  StyledSimpleDatePicker,
  StyledSimpleSelect,
} from '../../Component/Form/Form';
import { DateFormats } from '../../Types/Types';
import { dateFormat } from '../../utility';
import { BookAppointment } from './BookAppointment/BookAppointment';
import { ScheduleWrapper } from './Schedule.styled';
import { ScheduleDetail } from './ScheduleDetail/ScheduleDetail';
import { ScheduleHeader } from './ScheduleHeader/ScheduleHeader';
import { ViewSchedule } from './ViewSchedule/ViewSchedule';

export const Schedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState<any>();
  const [selectedSpeciality, setSelectedSpeciality] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>(
    dayjs().format(DateFormats.YearMonthDay)
  );
  const [viewBooking, setViewBooking] = useState<boolean>(true);

  useEffect(() => {
    if (!viewBooking) setSelectedSchedule(null);
  }, [viewBooking]);

  return (
    <ScheduleWrapper>
      <ScheduleHeader
        selectedSpeciality={selectedSpeciality}
        setSelectedSpeciality={setSelectedSpeciality}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        viewBooking={viewBooking}
        setViewBooking={setViewBooking}
      />
      <Row className="body-wrapper">
        <Row className="view-schedule">
          {viewBooking ? (
            <ViewSchedule
              selectedSpeciality={selectedSpeciality}
              selectedDate={selectedDate}
              setSelectedSchedule={setSelectedSchedule}
            />
          ) : (
            <BookAppointment />
          )}
        </Row>
        <Row className="view-schedule-detail">
          <ScheduleDetail schedule={selectedSchedule} />
        </Row>
      </Row>
    </ScheduleWrapper>
  );
};
