export enum ScheduleType {
  WORKING_HOURS = 'WORKING_HOURS',
  LEAVE = 'LEAVE',
}

export type ProviderSchedule = {
  title: string;
  facility: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  lunchStartTime: string;
  lunchEndTime: string;
  days: Array<string>;
  providerId: string;
  // leave
  approvalFlag: boolean;
  reasonForLeave: string;
  scheduleType: string;
  leaveStartTime: string;
  leaveEndTime: string;
};

export enum TabNames {
  Appointment = 'Appointment',
  PatientInsight = 'Patient Insight',
  TasksActions = 'Tasks & Actions',
  Communication = 'Communication',
  YourAvailability = 'your Availability',
  BillingCoding = 'Billing & Coding',
}

export enum TabValues {
  WORKING_HOURS = 'WORKING_HOURS',
  LEAVE = 'LEAVE',
  MONTLY_CALENDAR = 'MONTLY_CALENDAR',
  DAILY_CALENDAR = 'DAILY_CALENDAR',
}
