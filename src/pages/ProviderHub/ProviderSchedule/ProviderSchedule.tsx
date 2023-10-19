import { Button, Spin, notification, Row } from 'antd';
import dayjs from 'dayjs';
import React, {
  Dispatch,
  FC,
  useState,
  SetStateAction,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { StyledSimpleDatePicker } from '../../../Component/Form/Form';
import { AppointmentService } from '../../../Service/Appointment';
import { DateFormats } from '../../../Types/Types';
import { combineDateAndTime, getMinutesDifference } from '../../../utility';
import {
  PrevButton,
  DatePickerWrapper,
  NextButton,
} from '../../Scheduling/ScheduleHeader/ScheduleHeader.styled';

import { ProviderScheduleWrapper } from './ProviderSchedule.styled';
import { Appointment } from '../../Scheduling/ViewSchedule/Appointment/Appointment';
import { ViewScheduleWrapper } from '../../Scheduling/ViewSchedule/ViewSchedule.styled';

interface ProviderSchedulePrpos {
  selectedDate: null | string;
  setSelectedDate: Dispatch<SetStateAction<null | string>>;
}
export const ProviderSchedule: FC<ProviderSchedulePrpos> = ({
  selectedDate,
  setSelectedDate,
}) => {
  const [loader, setLoader] = useState<boolean>(false);
  const [scheduleData, setScheduleData] = useState<any[]>([]);
  const { providerId } = useParams();
  const appointmentService = AppointmentService();

  useEffect(() => {
    const getAppointmentByDate = async () => {
      try {
        setLoader(true);
        if (!providerId || !selectedDate) return;
        const data = await appointmentService.getAllAppointmentForProvider(
          providerId,
          moment(new Date(selectedDate)).format('YYYY-MM-DD')
        );
        const ro = data?.map((r: any) => ({
          ...r,
          resourceId: r.providerId,
          id: r.appointmentId,
          title: r.patientId,
          start: combineDateAndTime(r.scheduleDate, r.scheduleStartTime),
          end: combineDateAndTime(r.scheduleDate, r.scheduleEndTime),
        }));
        setScheduleData(ro);
      } catch (err: any) {
        notification.error({
          message:
            err?.response || 'Error occured while fetching appointment details',
        });
      } finally {
        setLoader(false);
      }
    };
    getAppointmentByDate();
  }, [selectedDate]);

  const handleDateChange = (daysToAdd: number) => {
    const targetDate = selectedDate
      ? dayjs(selectedDate)
          .add(daysToAdd, 'day')
          .format(DateFormats.YearMonthDay)
      : dayjs(selectedDate)
          .add(daysToAdd, 'day')
          .format(DateFormats.YearMonthDay);
    setSelectedDate(targetDate);
    console.log('handleDateChange -> targetDate', targetDate);
  };

  const customEvent = (e: any) => {
    const timeSlot = getMinutesDifference(
      combineDateAndTime(
        selectedDate ? new Date(selectedDate).toISOString() : null,
        e?.event?.scheduleStartTime
      )?.toISOString(),
      combineDateAndTime(
        selectedDate ? new Date(selectedDate).toISOString() : null,
        e?.event?.scheduleEndTime
      )?.toISOString()
    );

    return (
      <Appointment
        className={timeSlot < 30 ? 'show-in-row' : ''}
        timeSolt={timeSlot}
        name={e?.event?.patientName}
        mobile="9876543210" // need to remove this
        startTime={e?.event?.scheduleStartTime}
        endTime={e?.event?.scheduleEndTime}
        onClick={() => {
          console.log('clicked');
        }}
        // onClick={() => setSelectedSchedule(e.event)}
        status={e?.event?.currentStatusOfVisit}
      />
    );
  };

  return (
    <ProviderScheduleWrapper>
      <Row className="middle-section">
        <PrevButton
          className="date-handlers prev-button"
          onClick={() => handleDateChange(-1)}
        >
          {' '}
          {'<'}{' '}
        </PrevButton>
        <DatePickerWrapper>
          <StyledSimpleDatePicker
            className="datepicker-view-appointment date-picker"
            defaultValue={dayjs()}
            name="date"
            value={selectedDate ? dayjs(selectedDate) : null}
            onChange={(_value, dateString) => {
              const formattedDate = dateString ? dayjs(dateString) : null;
              setSelectedDate(
                formattedDate
                  ? formattedDate.format(DateFormats.YearMonthDay)
                  : ''
              );
            }}
            placeholder={dayjs().format(DateFormats.MonthDayYear)}
            format={DateFormats.MonthDayYear}
          />
        </DatePickerWrapper>
        <NextButton
          className="date-handlers next-button"
          onClick={() => handleDateChange(+1)}
        >
          {' '}
          {'>'}{' '}
        </NextButton>
        <Button
          className="btn"
          type="primary"
          onClick={() => {
            setSelectedDate(dayjs().format(DateFormats.YearMonthDay));
          }}
        >
          Today
        </Button>
      </Row>
      {loader ? (
        <Spin />
      ) : (
        <ViewScheduleWrapper>
          <Calendar
            backgroundEvents={[]}
            dayLayoutAlgorithm="no-overlap"
            defaultDate={selectedDate ? new Date(selectedDate) : new Date()}
            defaultView={Views.DAY}
            min={combineDateAndTime(
              selectedDate
                ? new Date(selectedDate).toISOString()
                : new Date().toISOString(),
              '9:00'
            )}
            max={combineDateAndTime(
              selectedDate
                ? new Date(selectedDate).toISOString()
                : new Date().toISOString(),
              '18:00'
            )}
            step={15} // duration of the slot
            timeslots={4}
            events={scheduleData}
            localizer={momentLocalizer(moment)}
            views={['day']}
            components={{
              event: customEvent,
            }}
          />
        </ViewScheduleWrapper>
      )}
    </ProviderScheduleWrapper>
  );
};
