import { useApi } from '../Api/useApi';

export const ProviderService = () => {
  const { baseApi } = useApi();
  const getProviderById = async (id: string) => {
    const { data } = await baseApi().get(
      `/api/provider/getProviderDetails/${id}`
    );
    return data;
  };
  const getAllProvider = async (queryParameter?: string) => {
    const { data } = await baseApi().get(`/provider/getAllProviderDetails`);
    return data;
  };
  const addProviderWorkingSchedule = async (payload?: any) => {
    const { data } = await baseApi().post(
      `/provider/addProviderWorkingSchedule`,
      payload
    );
    return data;
  };

  const getProviderWorkingScheduleByDate = async (payload?: any) => {
    const { data } = await baseApi().post(
      `/provider/getProviderWorkingScheduleByDate`,
      payload
    );
    return data;
  };
  const getProviderSchedule = async (providerId: string) => {
    const { data } = await baseApi().get(
      `/provider/getProviderSchedule/${providerId}`
    );
    return data;
  };

  const postProvider = async (payload: Record<string, any>) => {
    const { data } = await baseApi().post(`/provider/createProvider`, payload);
    return data;
  };
  const getProviderDetails = async () => {
    const { data } = await baseApi().get('/api/provider/getProviderDetails');
    return data;
  };

  const getSpeciality = async () => {
    const { data } = await baseApi().get('/provider/getAllSpeciality');
    return data;
  };

  const getProviderBySpeciality = async (speciality: string) => {
    const { data } = await baseApi().get(
      `/provider/getProvidersBySpeciality/${speciality}`
    );
    return data;
  };

  return {
    getProviderById,
    getAllProvider,
    postProvider,
    getProviderDetails,
    getSpeciality,
    getProviderBySpeciality,
    addProviderWorkingSchedule,
    getProviderWorkingScheduleByDate,
    getProviderSchedule,
  };
};
