export enum VaccinesTab {
  Vaccines = 'Vaccines',
  Injections = 'Injections',
}

export enum VaccinesForm {
  Administered = 'Administered',
  Historical = 'Historical',
  Refused = 'Refused',
}

export enum InjectionsForm {
  Administered = 'Administered',
  Historical = 'Historical',
  Refused = 'Refused',
}

export interface Vaccines {
  patientId: string;
  vaccineName: string;
  vaccineInfoFlag: string; // status administrated...

  orderedBy: string;
  administeredBy: string;
  administeredDate: string;
  administeredTime: string;

  facility: string;
  route: string;
  site: string;
  units: string;
  dose: string;

  source: string;
  refusalReason: string;
  refusalNote: string;
  vfcClass: string;
  visProvided: boolean;
  funding: string;

  vaccineNumber: string;
  totalVaccines: string;
  successFlag: boolean;

  vaccineInfo: string;
  vaccinationId: string;
  ndc: string;
  cvx: string;
}

export type VaccinesFormType = {
  isTodayFlag?: boolean;
  isNowFlag?: boolean;
  timeHr?: number | string;
  timeMin?: number | string;
  timeSec?: number | string;
  time?: number | string;
} & Vaccines;

export interface IVaccine {
  cvxCodes: string;
  id: number;
  ndc: string | null;
  vaccineName: string;
  vaccineStatus: string;
}

export interface Injection {
  injectionName?: string;
  patientId: number;
  orderedBy: string;
  administeredBy: string;
  time: string;
  isTodayFlag: boolean;
  isNowFlag: boolean;
  timeHr: number;
  timeMin: number;
  timeSec: number;
  administeredOn: string;
  expirationDate: string;
  location: string;
  route: string;
  site: string;
  dose: string;
  doseUnits: string;
  frequency: string;
  duration: string;
  durationUnits: string;
  notes: string;
  injectionInfoFlag: string;
}
