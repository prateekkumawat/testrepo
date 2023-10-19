export enum AllergiesTab {
  Meds = 'Meds',
  Supplements = 'Supplements',
}

export interface Medicine {
  medicineId: string | number;
  medicineName: string;
  Route: string;
  Action: string;
}

export type GetMedicine = Medicine & { medicineId: string | number };

export interface Meds {
  drugId: string;
  patientId: string | number;
  direction: string;
  quantity: string;
  when: string;
  dispense: string;
  frequency: string;
  duration: string;
  earliestFillDate: string;
  additionalRefills: string;
  activeFlag: boolean;
  prescribedFlag: boolean;
  drugName: string;
  supplementsFlag: boolean;
}

export const mockMeds: Meds[] = [
  {
    drugId: '1',
    patientId: 1,
    direction: '1 Capsule Eye Drops',
    quantity: '50mg',
    when: 'twice a day',
    dispense: '',
    frequency: '1',
    duration: '30 days',
    earliestFillDate: '10/10/2023',
    additionalRefills: 'no',
    activeFlag: true,
    prescribedFlag: false,
    drugName: 'Erithromycin',
    supplementsFlag: false,
  },
  {
    drugId: '1',
    patientId: 1,
    direction: '1 Capsule Eye Drops',
    quantity: '50mg',
    when: 'twice a day',
    dispense: '',
    frequency: '1',
    duration: '30 days',
    earliestFillDate: '10/10/2023',
    additionalRefills: 'no',
    activeFlag: false,
    prescribedFlag: false,
    drugName: 'Erithromycin',
    supplementsFlag: false,
  },
  {
    drugId: '1',
    patientId: 1,
    direction: '1 Capsule Eye Drops',
    quantity: '50mg',
    when: 'twice a day',
    dispense: '',
    frequency: '1',
    duration: '30 days',
    earliestFillDate: '10/10/2023',
    additionalRefills: 'no',
    activeFlag: true,
    prescribedFlag: true,
    drugName: 'Erithromycin',
    supplementsFlag: false,
  },
  {
    drugId: '1',
    patientId: 1,
    direction: '1 Capsule Eye Drops',
    quantity: '50mg',
    when: 'twice a day',
    dispense: '',
    frequency: '1',
    duration: '30 days',
    earliestFillDate: '10/10/2023',
    additionalRefills: 'no',
    activeFlag: false,
    prescribedFlag: true,
    drugName: 'Erithromycin',
    supplementsFlag: false,
  },
];
