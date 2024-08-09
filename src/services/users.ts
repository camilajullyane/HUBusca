import { AxiosPromise } from "axios";
import { api } from "../api/api";
import { apiResponseData } from "../models/apiResponseModel";

export const UserServices = {
  async getUserData(name: string): AxiosPromise<apiResponseData> {
    return await api.get(`/users/${name}`);
  },

  async getUsersRepositories(name: string) {
    return await api.get(`/users/${name}/repos`);
  },
};
