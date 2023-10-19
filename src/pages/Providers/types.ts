export interface Provider {
  firstName: string;
  lastName: string;
  prefix: string;
  degree: string;
  dateOfBirth: string;
  ssn: string; ///
  gender: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string; ///

  primaryNumber: string; ///
  secondaryNumber: string; ///
  primaryPracticeLocation: string;
  pagerCode: string; ///

  taxonomyCode: string; ///
  country: string; //-------
  speciality?: string;
  // screen2
  deaNumber: string;
  deaStartDate: Date;
  deaEndDate: Date;
  npi: string;
  specialLicense: string;
  licensingState: string;
  specialLicenseStartDate: Date;
  specialLicenseEndDate: Date;
  // anesthesiaLicense: string; // ------
  taxIdType: string;
  taxId: string;
  // sendProviderCredentials: string;
  sendProviderCredentials: boolean;
  providers: null;
  providerStatus: string;
}

export type ProviderWithId = {
  providerId: string;
} & Provider;

export type ProviderScreen1 = {
  firstName: string;
  lastName: string;
  prefix: string;
  degree: string;
  dateOfBirth: string;
  gender: string;
  primaryNumber: string;
  secondaryNumber: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  primaryPracticeLocation: string;
  pagerCode: string;
};

export type ProviderScreen2 = {
  taxonomyCode: string;
  deaNumber: string;
  deaStartDate: string;
  deaEndDate: string;
  npi: string;
  specialLicense: string;
  licensingSate: string;
  specialLicenseStartDate: string;
  specialLicenseEndDate: string;
  // AnesthesiaLicense: string;
  ssn: string;
  taxIdType: string;
  taxId: string;
  sendProviderCredentials: string;
};

export enum ProviderTabs {
  ADD_PROVIDER = 'ADD_PROVIDER',
  GET_ALL_PROVIDERS = 'GET_ALL_PROVIDERS',
  // PROVIDER_DETAILS = 'PROVIDER_DETAILS',
}
