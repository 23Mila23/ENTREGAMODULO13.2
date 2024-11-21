import { FieldValidationResult } from "@/common/validations/validation.model";
import { REQUIRED_FIELD_MESSAGE } from "./validation.const";

export const buildValidationFailedResult = (
    errorMessage: string
  ): FieldValidationResult => ({
    succeded: false,
    errorMessage: errorMessage,
  });
  
export   const buildValidationSuccededResult = () => ({
    succeded: true,
  });
  
export const buildRequiredFieldValidationFailedResponse = () => {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
   }