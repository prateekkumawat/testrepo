export const timesArray = [
  '09:00',
  '09:15',
  '09:30',
  '09:45',
  '10:00',
  '10:15',
  '10:30',
  '10:45',
  '11:00',
  '11:15',
  '11:30',
  '11:45',
  '12:00',
  '12:15',
  '12:30',
  '12:45',
  '13:00',
  '13:15',
  '13:30',
  '13:45',
  '14:00',
  '14:15',
  '14:30',
  '14:45',
  '15:00',
  '15:15',
  '15:30',
  '15:45',
  '16:00',
  '16:15',
  '16:30',
  '16:45',
  '17:00',
  '17:15',
  '17:30',
  '17:45',
  '18:00',
];

export const colorCodes = {
  Unconfirmed: '#FFB800',
  Confirmed: '#0CB208',
  'Checked-In': '#23408E',
  'Checked Out': '#22A2BF',
  Rescheduled: '#972587',
  Canceled: '#FC0303',
  'No-Show': '#000000',
};

export interface Appointment {
  appointmentId?: number;
  patientId: number;
  patientName: string;
  providerId: number;
  providerName: string;
  typeOfVisit: string;
  speciality?: string;
  currentStatusOfVisit: string;
  reasonOfVisit: string;
  scheduleDate: string;
  scheduleStartTime: string;
  scheduleEndTime: string;
}
