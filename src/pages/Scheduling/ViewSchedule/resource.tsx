import React, { Fragment, useMemo } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';

const events = [
  {
    id: 0,
    title: 'Board meeting',
    start: new Date(2023, 8, 25, 9, 0, 0),
    end: new Date(2023, 8, 25, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 10,
    title: 'Board meeting1',
    start: new Date(2023, 8, 25, 9, 0, 0),
    end: new Date(2023, 8, 25, 14, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: 'MS training',
    allDay: true,
    start: new Date(2023, 8, 25, 14, 0, 0),
    end: new Date(2023, 8, 25, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: 'Team lead meeting',
    start: new Date(2023, 8, 25, 8, 30, 0),
    end: new Date(2023, 8, 25, 12, 30, 0),
    resourceId: [2, 3],
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2023, 8, 35, 7, 0, 0),
    end: new Date(2023, 8, 35, 10, 30, 0),
    resourceId: 4,
  },
];

const resourceMap = [
  { resourceId: 1, resourceTitle: 'Board room' },
  { resourceId: 2, resourceTitle: 'Training room' },
  { resourceId: 3, resourceTitle: 'Meeting room 1' },
  { resourceId: 4, resourceTitle: 'Meeting room 2' },
];

const backgroundEvents = [
  {
    id: 0,
    title: 'Available for Clients',
    start: new Date(2015, 3, 13, 6),
    end: new Date(2015, 3, 13, 18),
  },
];

export const Resource = ({ localizer }: any) => {
  return (
    <Calendar
      backgroundEvents={backgroundEvents}
      dayLayoutAlgorithm="no-overlap"
      defaultDate={new Date()}
      defaultView={Views.DAY}
      events={events}
      localizer={momentLocalizer(moment)}
      resourceIdAccessor="resourceId"
      resources={resourceMap}
      resourceTitleAccessor="resourceTitle"
      step={60}
      views={['day']}
      // components={{
      //   event: MyEvent,
      // }}
    />
  );
};
