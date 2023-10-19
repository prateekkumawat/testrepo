import { useApi } from '../Api/useApi';
import { ConstructUrlFromQueryParams } from '../utility';

export const LoginService = () => {
  const { baseApi } = useApi();
  const getAccessToken = async (payload: any) => {
    const { data } = await baseApi().post(`/auth/login`, payload);
    return data;
  };
  const sendOTP = async (email: any) => {
    const { data } = await baseApi().post(`/communicate/sendOtpMail/${email}`);
    return data;
  };

  const submitOTP = async (payload: any) => {
    const { data } = await baseApi().post(`/communicate/validateOtp`, payload);
    return data;
  };
  const changePassword = async (payload: any) => {
    const { data } = await baseApi().post(`/auth/forgotPassword`, payload);
    return data;
  };

  return {
    getAccessToken,
    sendOTP,
    submitOTP,
    changePassword,
  };
};
