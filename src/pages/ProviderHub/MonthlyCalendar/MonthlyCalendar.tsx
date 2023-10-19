import { notification, Spin } from 'antd';
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { Views, momentLocalizer, Calendar } from 'react-big-calendar';
import { useParams } from 'react-router-dom';
import { ProviderService } from '../../../Service/Provider';
import {
  DateHeader,
  DateCellWrapper,
} from './CustomDateHeader/CustomDateHeader';
import { MonthlyCalendarWrapper } from './MonthlyCalendar.styled';
// import { datesMap } from './data.ts';
import { ScheduleType } from '../types';
import { combineDateAndTime } from '../../../utility';

interface MonthlyCalendarProps {
  className?: string;
}
export const MonthlyCalendar: FC<MonthlyCalendarProps> = ({ className }) => {
  const { providerId } = useParams();
  const providerService = ProviderService();
  const [monthData, setMonthData] = useState<any[]>([]);
  const [calendarloader, setCalendarLoader] = useState<boolean>(true);

  useEffect(() => {
    const getCalendarSchedule = async () => {
      try {
        setCalendarLoader(true);
        // const data = await providerService.getProviderWorkingScheduleByDate({
        //   providerId,
        //   month: new Date().getMonth() + 1,
        //   year: new Date().getFullYear(),
        // });
        // console.log('data', data);
        // const leaves = datesMap.filter(
        //   (e) => e.scheduleType === ScheduleType.LEAVE
        // );
        // const leaveEvent = leaves.map(r => {
        //   id: r.appointmentId,
        //     title: r.patientId,
        //     start: combineDateAndTime(r.scheduleDate, r.scheduleStartTime),
        //     end: combineDateAndTime(r.scheduleDate, r.scheduleEndTime),
        // })
        // setMonthData(data);
      } catch (err) {
        console.log('err', err);
        notification.error({
          message: 'Error occured while fetching montly Calendar',
        });
      } finally {
        setCalendarLoader(false);
      }
    };
    getCalendarSchedule();
  }, []);

  return (
    <MonthlyCalendarWrapper>
      {calendarloader ? (
        <div className="spinner-loader">
          <Spin />
        </div>
      ) : (
        <Calendar
          className={className}
          dayLayoutAlgorithm="no-overlap"
          defaultDate={new Date()}
          defaultView={Views.MONTH}
          events={monthData}
          localizer={momentLocalizer(moment)}
          views={['month']}
          // components={{
          //   month: {
          //     dateHeader: DateHeader,
          //   },
          // dateCellWrapper: DateCellWrapper,
          // }}
        />
      )}
    </MonthlyCalendarWrapper>
  );
};
