import Axios from "axios";
import { AccountApiModel } from "./account-list.api-model";
import { AccountVm } from "../account-list.vm";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<AccountApiModel[]> => {
  return Axios.get<AccountApiModel[]>(url).then((response) => response.data);
};

export const deleteAccount = (accountId: string): Promise<{}> => {
  const deleteUrl = `${url}/${accountId}`;
  return Axios.delete<AccountVm>(deleteUrl);
};
