import React, { FC } from 'react';
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';
import { Appointment } from './Appointment/Appointment';
import { combineDateAndTime, getMinutesDifference } from '../../../utility';

export interface ViewSchedueUIProps {
  backgroundEvents: any;
  events: any;
  resourceMap: any;
  selectedDate: any;
  setSelectedSchedule: any;
}

export const ViewSchedueUI: FC<ViewSchedueUIProps> = ({
  backgroundEvents,
  events,
  resourceMap,
  selectedDate,
  setSelectedSchedule,
}) => {
  const customEvent = (e: any) => {
    const timeSlot = getMinutesDifference(
      combineDateAndTime(
        new Date(selectedDate).toISOString(),
        e?.event?.scheduleStartTime
      )?.toISOString(),
      combineDateAndTime(
        new Date(selectedDate).toISOString(),
        e?.event?.scheduleEndTime
      )?.toISOString()
    );

    return (
      <>
      <Appointment
        className={timeSlot < 30 ? 'show-in-row' : ''}
        timeSolt={timeSlot}
        name={e?.event?.patientName}
        mobile="9876543210" // need to remove this
        startTime={e?.event?.scheduleStartTime}
        endTime={e?.event?.scheduleEndTime}
        onClick={() => setSelectedSchedule(e.event)}
        status={e?.event?.currentStatusOfVisit}
        />
        </>
    );
  };
  
  return (
    <Calendar
      backgroundEvents={backgroundEvents}
      dayLayoutAlgorithm="no-overlap"
      defaultDate={new Date(selectedDate)}
      defaultView={Views.DAY}
      min={combineDateAndTime(new Date(selectedDate).toISOString(), '9:00')}
      max={combineDateAndTime(new Date(selectedDate).toISOString(), '18:00')}
      step={15} // duration of the slot
      timeslots={4}
      events={events}
      localizer={momentLocalizer(moment)}
      resourceIdAccessor="providerId"
      resources={resourceMap}
      resourceTitleAccessor="resourceTitle"
      views={['day']}
      components={{
        event: customEvent,
      }}
    />
  );
};
