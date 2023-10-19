import { useApi } from '../Api/useApi';

export const AppointmentService = () => {
  const { baseApi } = useApi();
  const getAppointmentById = async (id: string) => {
    const { data } = await baseApi().get(
      `/appointment/getAppointmentDetails/${id}`
    );
    return data;
  };
  const getAllAppointment = async (scheduleDate: string) => {
    const { data } = await baseApi().get(
      `/appointment/getProviderSchedule/${scheduleDate}`
    );
    return data;
  };
  const postAppointment = async (payload: Record<string, any>) => {
    const { data } = await baseApi().post(
      `/appointment/bookAppointment`,
      payload
    );
    return data;
  };

  const getAllAppointmentForProvider = async (
    providerId: string,
    scheduleDate: string
  ) => {
    const { data } = await baseApi().get(
      `appointment/getProviderSchedule/${providerId}/${scheduleDate}`
    );
    return data;
  };

  return {
    getAppointmentById,
    getAllAppointment,
    postAppointment,
    getAllAppointmentForProvider,
  };
};
