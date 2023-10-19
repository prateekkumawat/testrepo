import axios from 'axios';
import { useApi } from '../Api/useApi';

export const MedicineService = () => {
  const { baseApi } = useApi();
  const getMedicineById = async (id: string) => {
    const { data } = await baseApi().get(
      `/api/medicine/getMedicineDetails/${id}`
    );
    return data;
  };
  const getAllMedicine = async (queryParameter?: string) => {
    const { data } = await baseApi().get(`/api/medicine/getAllMedicines`);
    return data;
  };
  const postMedicine = async (payload: Record<string, any>) => {
    const { data } = await baseApi().post(
      `/api/medicine/createMedicine`,
      payload
    );
    return data;
  };
  const getMedicineDetails = async (id?: string) => {
    const { data } = await baseApi().get(
      `/api/medicine/getMedicineDetails/${id}`
    );
    return data;
  };
  const getMedicinesExternalCall = async (name?: string) => {
    const { data } = await axios.get(
      `https://rxnav.nlm.nih.gov/REST/spellingsuggestions.json?name=${name}`
    );
    return data;
  };

  return {
    getMedicineById,
    getAllMedicine,
    postMedicine,
    getMedicineDetails,
    getMedicinesExternalCall,
  };
};
