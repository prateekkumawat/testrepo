import { useApi } from "../Api/useApi";

export interface IPatient {
  firstName: "";
}

export const ReferringProviderService = () => {
  const { baseApi } = useApi();

  const postReferringProvider = async (payload: Record<string, any>) => {
    const { data } = await baseApi().post(`/npi/addReferringProvider`, payload);
    return data;
  };
  const getReferringProvider = async () => {
    const { data } = await baseApi().get(`/npi/getAllRefferal`);
    return data;
  };
  return {
    postReferringProvider,
    getReferringProvider,
  };
};
