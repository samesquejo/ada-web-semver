import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  result: string;
  data: T[];
  count: number;
}

export interface FetchOne<T> {
  data: T;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_DOMAIN,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = (data: T, config?: AxiosRequestConfig) => {
    return axiosInstance
      .post<T>(this.endpoint, data, config)
      .then((res) => res.data)
      .catch((err) => err.response);
  };

  put = (data: T, config?: AxiosRequestConfig) => {
    return axiosInstance
      .put<T>(this.endpoint, data, config)
      .then((res) => res.data)
      .catch((err) => err.response);
  };

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data)
      .catch((err) => err.response);
  };

  getOne = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchOne<T>>(this.endpoint, config)
      .then((res) => res.data)
      .catch((err) => err.response);
  };

  patch = (data: T, config?: AxiosRequestConfig) => {
    return axiosInstance
      .patch<T>(this.endpoint, data, config)
      .then((res) => res.data)
      .catch((err) => err.response);
  };

  deleteOne = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .delete<T>(this.endpoint, config)
      .then((res) => res.data)
      .catch((err) => err.response);
  };
}

export default APIClient;
