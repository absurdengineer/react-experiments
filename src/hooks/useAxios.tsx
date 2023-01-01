import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const useAxios = (config: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();

  const fetchData = async (config: any) => {
    try {
      axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
      const response = await axios(config);
      setResponse(response.data);
    } catch (err: any) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData(config);
  }, []);

  return [response, error] as const;
};

export default useAxios;
