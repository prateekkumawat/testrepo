export const RoutesPath = {
  // patient
  CREATE_PATIENT: '/patient/create',
  GET_ALL_PATIENT: '/patient',
  GET_PATIENT_BY_ID: '/patient/:patientId',
  GET_PATIENT_Allergies_BY_ID: '/patient/:patientId/allergy',
  // provider
  PROVIDER: '/provider',
  CREATE_PROVIDER: '/provider/create',
  GET_ALL_PROVIDER: '/provider/all',
  EDIT_PROVIDER: '/provider/edit',
  GET_PROVIDER_BY_ID: '/provider/:providerId',
  // hub
  PROVIDER_HUB_APPOINTMENT: '/provider/:providerId/appointemtns',
  PROVIDER_HUB_AVAILABLITY: '/provider/:providerId/availablity',

  // soap notes
  SOAP_NOTES: '/soapNotes',
  CREATE_SOAP_NOTES: '/soapNotes/create',
  EDIT_SOAP_NOTES: '/soapNotes/edit/:templateId',
  // SoapNotes
  ICDCPT_Codes: '/icd/getICDMapping',
  // Scheduling
  GET_ALL_SCHEDULE: '/schedule/all',
  // login
  LOGIN: '/',
};
