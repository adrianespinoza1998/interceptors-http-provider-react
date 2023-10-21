import axios, { AxiosInstance } from "axios";

export class HttpService {
  public static axios: AxiosInstance = axios;

  static async get<T>(url: string): Promise<T> {
    const getResponse = await HttpService.axios({
      url,
      method: "GET",
    });

    return getResponse.data;
  }

  static async post<T>(url: string, body: unknown): Promise<T> {
    const postResponse = await HttpService.axios({
      url,
      method: "POST",
      data: body,
    });

    return postResponse.data;
  }

  static async put<T>(url: string, body: unknown): Promise<T> {
    const putResponse = await HttpService.axios({
      url,
      method: "PUT",
      data: body,
    });

    return putResponse.data;
  }

  static async patch<T>(url: string, body: unknown): Promise<T> {
    const patchResponse = await HttpService.axios({
      url,
      method: "PATCH",
      data: body,
    });

    return patchResponse.data;
  }

  static async delete<T>(url: string): Promise<T> {
    const deleteResponse = await HttpService.axios({
      url,
    });

    return deleteResponse.data;
  }
}
