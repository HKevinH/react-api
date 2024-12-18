import axios, { AxiosInstance } from "axios";

const url: string = "http://localhost:5017/api/";

const instance: AxiosInstance = axios.create({
  baseURL: url,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

const getDataPlayers = async () => {
  try {
    const res = await instance.get("Resultados/results");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const addResult = async (obj) => {
  const res = await instance.post("addResult", obj);
  return res;
};

export { getDataPlayers, addResult };
