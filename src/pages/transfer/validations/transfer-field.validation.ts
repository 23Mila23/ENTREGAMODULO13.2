import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationFailedResult,
  buildValidationSuccededResult,
  isDateAfterToday,
  isEmailWellFormed,
  isPositiveNumber,
  isStringValueInformed,
  isValidIban,
  isValueNotNullOrUndefined,
} from "@/common/validations";
import {
  INVALID_IBAN_MESSAGE,
  INVALID_AMOUNT_MESSAGE,
  INVALID_REAL_DATE_MESSAGE,
  INVALID_EMAIL_MESSAGE,
} from "@/common/validations/validation.const";
import { FieldValidationResult } from "@/common/validations/validation.model";



export const validateIBANField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  if (!isValidIban(value)) {
    return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateAccountIdField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSuccededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSuccededResult();
};

export const validateAmountField = (value: number): FieldValidationResult => {
  if (!isPositiveNumber(value)) {
    return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE);
  }
  return buildValidationSuccededResult();
};

export const validateConceptField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSuccededResult();
};

export const validateNotesField = (_: string): FieldValidationResult => {
  return buildValidationSuccededResult();
};

export const validateRealDateTransferField = (
  value?: Date
): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSuccededResult();
  }
  if (value && !isDateAfterToday(value)) {
    return buildValidationFailedResult(INVALID_REAL_DATE_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateEmailField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationSuccededResult();
  }

  if (!isEmailWellFormed(value)) {
    return buildValidationFailedResult(INVALID_EMAIL_MESSAGE);
  }

  return buildValidationSuccededResult();
};
