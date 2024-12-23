export interface Account {
  type: string;
  name: string;
}

export const createEmptyAccount = (): Account => ({
  type: "",
  name: "",
});

export interface AccountError {
  type: string;
  name: string;
}

export const createEmptyAccountError = (): AccountError => ({
  type: "",
  name: "",
});
