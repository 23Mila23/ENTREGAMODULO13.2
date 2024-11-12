import {
  createEmptyCredentialsFormErrors,
  CredentialsFormErrors,
} from "./login.vm";

interface ValidationResult {
  succeded: boolean;
  errors: CredentialsFormErrors;
}

export const validateForm = (
  credentials: CredentialsFormErrors
): ValidationResult => {
  let validationResult: ValidationResult = {
    succeded: true,
    errors: createEmptyCredentialsFormErrors(),
  };
if(!credentials.user.trim()){
    validationResult.errors = {
        ...validationResult.errors,
        user:"Debe introducir un usuario"
    }
    validationResult.succeded = false;
}

if(!credentials.password.trim()){
    validationResult.errors = {
        ...validationResult.errors,
        password : "Debe introducir una contraseña"
    }
    validationResult.succeded = false;
}
  return validationResult;
};
