import { AxiosRequestConfig } from 'axios';
import { SnackbarUtilities } from '../src/utils';
import { axiosApi } from '../services/axios.api';

export const AxiosInterceptor = () => {
  const updateHeader = (request: AxiosRequestConfig) => {
    const newHeaders = {
      Authorization: '',
      'Content-Type': 'application/json',
    };
    request.headers = newHeaders;
    return request;
  };

  axiosApi.interceptors.request.use((request) => {
    if (request.url?.includes('assets')) return request;
    return updateHeader(request);
  });

  axiosApi.interceptors.response.use(
    (response) => {
      if (response.status === 204) SnackbarUtilities.success('Success');
      console.log(response.data);
      return response;
    },
    (error) => {
      // console.log(error.response);
      if (error.response.data.errorMessage) SnackbarUtilities.error(error.response.data.errorMessage[0]);
      // SnackbarUtilities.error(error.code);
      return Promise.reject(error);
      // return error;
    },
  );
};
