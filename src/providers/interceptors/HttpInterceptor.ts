import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { Logger } from "../logger/Logger";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  if (import.meta.env.MODE === "development") {
    Logger.info(`[Request] [${JSON.stringify(config)}]`);
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  if (import.meta.env.MODE === "development") {
    Logger.error(`[Request Error] [${JSON.stringify(error)}]`);
  }
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  if (import.meta.env.MODE === "development") {
    Logger.info(`[Response] [${JSON.stringify(response)}]`);
  }
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (import.meta.env.MODE === "development") {
    Logger.error(`[Response Error] [${JSON.stringify(error)}]`);
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
