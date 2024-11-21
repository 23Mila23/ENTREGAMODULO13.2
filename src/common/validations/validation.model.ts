
export interface FieldValidationResult {
    succeded: boolean;
    errorMessage?: string;
  }
  
  export interface FormValidationResult <T> {
    succeded: boolean;
    errors: T;
  }
  