import * as apiModel from "./api/login.api-model";
import * as viewModel from "./login.vm";

export const mapCredentialsFromVmtoApi = (credentials : viewModel.Credentials) : apiModel.CredentialsApi => ({
user : credentials.user,
password: credentials.password,
}) 