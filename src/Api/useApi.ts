import axios from 'axios';
import { useSelector } from 'react-redux';
import { UserAuth, UserAuthSelector } from '../Store/Slice/User.slice';

export const useApi = () => {
  const userAuth: UserAuth = useSelector(UserAuthSelector);

  const baseApi = (headers?: Record<any, any>) => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
        Authorization: userAuth?.accessToken
          ? `Bearer ${userAuth?.accessToken}`
          : '',
        ...headers,
      },
    });
    return instance;
  };

  return {
    baseApi,
  };
};
