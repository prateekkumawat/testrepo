import axios from 'axios';
import { useApi } from '../Api/useApi';
import { GetPatient } from '../pages/CreatePatient/Types';

export const PatientService = () => {
  const { baseApi } = useApi();
  const getPatientById = async (id: string) => {
    const { data } = await baseApi().get(
      `/api/patient/getPatientDetails/${id}`
    );
    return data;
  };
  const addVitalsForPatient = async (payload: any) => {
    const { data } = await baseApi().post(
      `/api/patient/addVitalsForPatient`,
      payload
    );
    return data;
  };
  const getVitalsForPatient = async (patientId: string) => {
    const { data } = await baseApi().get(
      `/api/patient/getVitalsForPatient/${patientId}`
    );
    return data;
  };
  const getAllPatient = async (queryParameter?: string) => {
    const { data } = await baseApi().get(`/api/patient/getAllPatients`);
    return data;
  };
  const postPatient = async (payload: Record<string, any>) => {
    const { data } = await baseApi().post(
      `/api/patient/createPatient`,
      payload
    );
    return data;
  };
  const getPatientDetails = async (id?: string) => {
    const { data } = await baseApi().get(
      `/api/patient/getPatientDetails/${id}`
    );
    return data;
  };
  const addAllergies = async (payload: any) => {
    const { data } = await baseApi().post(`/api/patient/addAllergy`, payload);
    return data;
  };
  const viewAllergies = async (patientId: string) => {
    const { data } = await baseApi().get(
      `/api/patient/getAllergyByPatientId/${patientId}`
    );
    return data;
  };

  // visits
  const getVisitByDate = async (patientId: string) => {
    const { data } = await baseApi().get(
      `/api/patient/getAllAppointmentByPatientIdDateSorted/${patientId}`
    );
    return data;
  };
  const getVisitBySpeciality = async (patientId: string) => {
    const { data } = await baseApi().get(
      `/api/patient/getAllAppointmentByPatientId/${patientId}`
    );
    return data;
  };

  // ,meds
  const addPrescription = async (payload: any) => {
    const { data } = await baseApi().post(
      `api/patient/addPrescription`,
      payload
    );
    return data;
  };
  const getPrescriptionById = async (prescriptionId: string) => {
    const { data } = await baseApi().get(
      `/api/patient/getPrescriptionById/${prescriptionId}`
    );
    return data;
  };
  const getPrescriptions = async () => {
    const { data } = await baseApi().get(`/api/patient/getAllPrescriptions`);
    return data;
  };

  // vaccines

  const getAllVaccines = async () => {
    const { data } = await baseApi().get(`api/patient/getAllVaccines`);
    return data;
  };
  const addVaccines = async (payload: any) => {
    const { data } = await baseApi().post(`api/patient/addVaccine`, payload);
    return data;
  };
  const getVaccinesByPatientId = async (patientId: string) => {
    const { data } = await baseApi().get(
      `api/patient/getVaccinesByPatientId/${patientId}`
    );
    return data;
  };

  // injection
  const getAllInjections = async () => {
    const { data } = await baseApi().get(`api/patient/getAllInjections`);
    return data;
  };
  const addInjection = async (payload: any) => {
    const { data } = await baseApi().post(`api/patient/addInjection`, payload);
    return data;
  };
  const getInjectionByPatientId = async (patientId: string) => {
    const { data } = await baseApi().get(
      `api/patient/getInjectionsByPatientId/${patientId}`
    );
    return data;
  };

  return {
    getPatientById,
    getAllPatient,
    postPatient,
    getPatientDetails,
    addAllergies,
    viewAllergies,
    addVitalsForPatient,
    getVitalsForPatient,
    getVisitByDate,
    getVisitBySpeciality,
    addPrescription,
    getPrescriptionById,
    getPrescriptions,
    getAllVaccines,
    addVaccines,
    getVaccinesByPatientId,
    getAllInjections,
    addInjection,
    getInjectionByPatientId,
  };
};
