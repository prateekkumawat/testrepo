import * as Yup from "yup";

export const PatientBasicDetailValidations = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  primaryPhoneNumber: Yup.string().required("Primary phone number is required").min(10, 'Phone number needs to be 10 digits'),
  secondaryPhoneNumber: Yup.string().min(10, 'Phone number needs to be 10 digits'),
  ssn: Yup.string().nullable().length(9),
  email: Yup.string().email(),
  zip: Yup.string().min(5).max(9),
});

export const EmergencyContactValidation = Yup.object({
  firstName: Yup.string(),
  lastName: Yup.string(),
  relation: Yup.string(),
  phoneNumber: Yup.string(),
});

export const PharmaciesValidation = Yup.object({
  storeName: Yup.string(),
  addressLine1: Yup.string(),
  zipCode: Yup.string(),
  city: Yup.string(),
  State: Yup.string(),
  phone: Yup.string().min(10, 'Phone number needs to be 10 digits'),
  "ext.": Yup.string(),
  packs: Yup.string(),
  ncpdpId: Yup.string(),
  ePrescriptionEnabledFlag: Yup.string(),
  mailOrderEnabledFlag: Yup.string(),
});
export const AttorneysValidation = Yup.object({
  firstName: Yup.string(),
  lastName: Yup.string(),
  officeAddress: Yup.string(),
  primaryPhoneNumber: Yup.string().min(10, 'Phone number needs to be 10 digits'),
  additionalNotes: Yup.string(),
});
export const ResponsiblepartyValidation = Yup.object({});
export const RefferingProviderValidation = Yup.object({
  npi: Yup.string(),
  npiType: Yup.string(),
  specialty: Yup.string(),
  providerFirstName: Yup.string(),
  providerLastName: Yup.string(),
  organisationName: Yup.string(),
});

export const PatientValidation = Yup.object({
  profileImage: Yup.string(),
  accountNo: Yup.string(),
  prefix: Yup.string(),
  lastName: Yup.string(),
  suffix: Yup.string(),
  firstName: Yup.string(),
  middleName: Yup.string(),
  preferredName: Yup.string(),
  addressLine1: Yup.string(),
  addressLine2: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  county: Yup.string(),
  zip: Yup.string(),
  country: Yup.string(),
  primaryPhoneNumber: Yup.string().min(10, 'Phone number needs to be 10 digits'),
  secondaryPhoneNumber: Yup.string().min(10, 'Phone number needs to be 10 digits'),
  email: Yup.string(),
  dateOfBirth: Yup.string(),
  ssn: Yup.string(),
  gender: Yup.string(),
  releaseOfInfo: Yup.string(),
  empStatus: Yup.string(),
  ethnicity: Yup.string(),
  language: Yup.string(),
  pcp: Yup.string(),
  pcg: Yup.string(),
  prescriptionHistoryConsent: Yup.string(),
  maritalStatus: Yup.string(),
  outStandingBalance: Yup.string(),
  emergencyContact: EmergencyContactValidation,
  Pharmacies: PharmaciesValidation,
  Attorneys: AttorneysValidation,
  responsibleparty: ResponsiblepartyValidation,
  refferingProvider: RefferingProviderValidation,
});

export const PatientAdditionalInfoValidations = Yup.object({
  profileImage: Yup.string(),
  accountNo: Yup.string(),
  prefix: Yup.string(),
  lastName: Yup.string(),
  suffix: Yup.string(),
  firstName: Yup.string(),
  middleName: Yup.string(),
  preferredName: Yup.string(),
  addressLine1: Yup.string(),
  addressLine2: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  county: Yup.string(),
  zip: Yup.string(),
  country: Yup.string(),
  primaryPhoneNumber: Yup.string().min(10, 'Phone number needs to be 10 digits'),
  secondaryPhoneNumber: Yup.string().min(10, 'Phone number needs to be 10 digits'),
  email: Yup.string(),
  dateOfBirth: Yup.string(),
  ssn: Yup.string(),
  gender: Yup.string(),
  releaseOfInfo: Yup.string(),
  prescriptionHistoryConsent: Yup.string(),
  responsibleparty: ResponsiblepartyValidation,
  refferingProvider: RefferingProviderValidation,

  emergencyContact: EmergencyContactValidation,
  pcp: Yup.string(),
  pcg: Yup.string(),
  language: Yup.string(),
  ethnicity: Yup.string(),
  empStatus: Yup.string(),
  maritalStatus: Yup.string(),
  Attorneys: AttorneysValidation,
  Pharmacies: PharmaciesValidation,
  outStandingBalance: Yup.string(),
});
