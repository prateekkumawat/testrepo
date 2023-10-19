export interface Visit {
  appointmentId: number;
  patientId: number;
  patientName: string;
  providerId: number;
  providerName: string;
  typeOfVisit: string;
  speciality: string;
  currentStatusOfVisit: string;
  reasonOfVisit: string;
  scheduleDate: string;
  scheduleStartTime: ScheduleStartTime;
  scheduleEndTime: ScheduleEndTime;
}

export interface ScheduleStartTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface ScheduleEndTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export const temp = [
  {
    appointmentId: 1,
    patientId: 2,
    patientName: 'Bob',
    providerId: 3,
    providerName: 'DR Niaz',
    typeOfVisit: 'Follow-up',
    speciality: 'Chiropractor',
    currentStatusOfVisit: 'Confirmed',
    reasonOfVisit: 'Regular checkup',
    scheduleDate: '2023-09-21',
    scheduleStartTime: {
      hour: 10,
      minute: 30,
      second: 0,
      nano: 0,
    },
    scheduleEndTime: {
      hour: 11,
      minute: 30,
      second: 0,
      nano: 0,
    },
  },
  {
    appointmentId: 1,
    patientId: 2,
    patientName: 'Bob',
    providerId: 3,
    providerName: 'DR Niaz',
    typeOfVisit: 'Follow-up',
    speciality: 'Chiropractor',
    currentStatusOfVisit: 'Upcoming',
    reasonOfVisit: 'Ligament Tear',
    scheduleDate: '2023-09-21',
    scheduleStartTime: {
      hour: 10,
      minute: 30,
      second: 0,
      nano: 0,
    },
    scheduleEndTime: {
      hour: 11,
      minute: 30,
      second: 0,
      nano: 0,
    },
  },
  {
    appointmentId: 1,
    patientId: 2,
    patientName: 'Bob',
    providerId: 3,
    providerName: 'DR Niaz',
    typeOfVisit: 'Follow-up',
    speciality: 'Chiropractor',
    currentStatusOfVisit: 'Cancelled',
    reasonOfVisit: 'Monthly Checkup',
    scheduleDate: '2023-09-21',
    scheduleStartTime: {
      hour: 10,
      minute: 30,
      second: 0,
      nano: 0,
    },
    scheduleEndTime: {
      hour: 11,
      minute: 30,
      second: 0,
      nano: 0,
    },
  },
  {
    appointmentId: 1,
    patientId: 2,
    patientName: 'Bob',
    providerId: 3,
    providerName: 'DR Niaz',
    typeOfVisit: 'Follow-up',
    speciality: 'Chiropractor',
    currentStatusOfVisit: 'Completed',
    reasonOfVisit: 'Knee Pain',
    scheduleDate: '2023-09-21',
    scheduleStartTime: {
      hour: 10,
      minute: 30,
      second: 0,
      nano: 0,
    },
    scheduleEndTime: {
      hour: 11,
      minute: 30,
      second: 0,
      nano: 0,
    },
  },
];
