import { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { Logger } from "../logger/Logger";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  config.headers["x-token"] = "12345";
  if (import.meta.env.MODE === "development") {
    Logger.info(`[RequestHeaders] [${JSON.stringify(config.headers)}]`);
  }
  return config;
};

export const setupAuthInterceptorsTo = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest);
  return axiosInstance;
};
