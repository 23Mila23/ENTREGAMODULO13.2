import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationSuccededResult,
  isStringValueInformed,
} from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";
import { mapAccountListFromApiToVm } from "@/pages/account-list/account-list.mapper";
import { getAccountList } from "@/pages/account-list/api";

export const validateAccountTypeField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSuccededResult();
};

export const validateAccountAliasField = async (
  value: string
): Promise<FieldValidationResult> => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  const accountsAlreadyCreated = await getAccountList().then((result) => {
    const vmAccountList = mapAccountListFromApiToVm(result);
    const isAliasRepeated = vmAccountList.find((account) => {
      return value === account.name;
    });
    return isAliasRepeated;
  });

  if (accountsAlreadyCreated) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSuccededResult();
};