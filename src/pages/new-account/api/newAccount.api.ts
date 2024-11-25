import Axios from "axios";
import { Account } from "./newAccount.api-model";

const urlSaveAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;


export const saveAccount = (account: Account): Promise<Account> => {
  return Axios.post<Account>(urlSaveAccount, account).then(({ data }) => data);
};
