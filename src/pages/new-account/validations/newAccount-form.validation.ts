import { FormValidationResult } from "@/common/validations/validation.model";
import { Account, AccountError } from "../newAccount.vm";
import {
  validateAccountAliasField,
  validateAccountTypeField,
} from "./newAccount-field.validation";

export const validateNewAccountForm = async (
  account: Account
): Promise<FormValidationResult<AccountError>> => {
  const isAccountTypeValidated = validateAccountTypeField(account.type);
  const isAccountAliasValidated = await validateAccountAliasField(account.name);
  const validationResults = [isAccountTypeValidated, isAccountAliasValidated];

  return {
    succeded: validationResults.every((field) => field.succeded),
    errors: {
      type: validationResults[0].errorMessage ?? "",
      name: validationResults[1].errorMessage ?? "",
    },
  };
};
