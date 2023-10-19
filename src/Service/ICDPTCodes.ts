import { useApi } from '../Api/useApi';

export const ICDPTCodesService = () => {
  const { baseApi } = useApi();
  
  const getAllICDPTCodes = async () => {
    const { data } = await baseApi().get('/icd/getICDMapping');
    return data;
  };

  return {
    getAllICDPTCodes,
  };
};
