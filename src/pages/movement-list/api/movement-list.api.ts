import Axios from "axios";
import { MovementApiModel } from "./movement-list.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (
  accountId: string
): Promise<MovementApiModel[]> => {
   return Axios.get<MovementApiModel[]>(url, { params: { accountId } }).then(
    ({ data }) => data
  );
};
