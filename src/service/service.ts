/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const auth = async(url: string, data: object, setData: Function) => {
  const response = await api.post(url, data);
  setData(response.data);
}

export const getWithToken= async(url: string, setData: Function, headers: object) => {
  const response = await api.get(url, headers);
  setData(response.data);
}