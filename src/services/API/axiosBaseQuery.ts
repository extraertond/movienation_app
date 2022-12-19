import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

const axiosBaseQuery =
  <QueryReturnType = unknown>(
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    QueryReturnType,
    unknown
  > =>
  async ({ url, method = "get", data, params }) => {
    try {
      const client = axios.create();
      const result = await client.request<QueryReturnType>({
        url: baseUrl + url,
        data,
        params,
        method,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
