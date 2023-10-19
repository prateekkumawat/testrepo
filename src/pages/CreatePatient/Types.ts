export interface Patient {
  profileImage: string;
  accountNo: string | number;
  prefix: string;
  lastName: string;
  suffix: string;
  firstName: string;
  middleName: string;
  // previousName: string
  preferredName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  county: string;
  zip: string;
  country: string;
  homePhone: string;
  cellPhone: string;
  workPhone: string;
  extension: string;
  email: string;
  dateOfBirth: string;
  ssn: string;
  primaryPhoneNumber: string;
  secondaryPhoneNumber: string;
  referringProvider: RefferingProvider;
  releaseOfInfo: string;
  rxHistoryConsent: string;
  responsibleParty: Responsibleparty;
  gender: string;
  empStatus: string;
  ethnicity: string;
  language: string;
  maritalStatus: string;
  pcg: string;
  pcp: string;
  npi: string;
  selfResponsibleFlag: boolean;
  emailPermission: string;
  textPermission: string;
  voicePermission: string;
  preferredModeOfCommunication: string;
  prescriptionHistoryConsent: string;
  emergencyContacts: EmergencyContact[];
  Pharmacies: Pharmacies;
  Attorneys: Attorneys;
  outStandingBalance?: number;
}

export type CreatePatientScreen1 = Pick<
  Patient,
  | 'profileImage'
  | 'ssn'
  | 'primaryPhoneNumber'
  | 'secondaryPhoneNumber'
  | 'email'
  | 'dateOfBirth'
  | 'accountNo'
  | 'gender'
  | 'firstName'
  | 'prefix'
  | 'middleName'
  | 'lastName'
  | 'suffix'
  | 'preferredName'
  | 'selfResponsibleFlag'
  | 'addressLine1'
  | 'addressLine2'
  | 'county'
  | 'city'
  | 'state'
  | 'zip'
  | 'country'
  | 'referringProvider'
  | 'releaseOfInfo'
  | 'prescriptionHistoryConsent'
>;

export type CreatePatientScreen2 = Pick<
  Patient,
  | 'emergencyContacts'
  | 'pcg'
  | 'pcp'
  | 'language'
  | 'ethnicity'
  | 'empStatus'
  | 'maritalStatus'
  | 'Attorneys'
  | 'Pharmacies'
  | 'emailPermission'
  | 'textPermission'
  | 'voicePermission'
  | 'preferredModeOfCommunication'
  | 'outStandingBalance'
>;

export type GetPatient = Patient & { patientId: string | number };

export interface EmergencyContact {
  firstName: string;
  lastName: string;
  relation: string;
  phoneNumber: string;
  ext: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Pharmacies {
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
  phone: string;
  'ext.': string;
  notes: string;
  ncpdpId: string;
  fax: string;
  ePrescription: boolean;
  eMailEnabled: boolean;
}

export interface Attorneys {
  firstName: string;
  lastName: string;
  officeAddress: string;
  primaryPhoneNumber: string;
  additionalNotes: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Responsibleparty {}

export interface RefferingProvider {
  npi: string;
  npiType: string;
  specialty: string;
  providerFirstName: string;
  providerLastName: string;
  organisationName: string;
}
