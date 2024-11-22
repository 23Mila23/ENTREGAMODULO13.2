import React from "react";
import {
  Account,
  AccountError,
  createEmptyAccount,
  createEmptyAccountError,
} from "../newAccount.vm";
import classes from "./newAccount-form.component.module.css";
import { validateNewAccountForm } from "../validations/newAccount-form.validation";

const accountTypes = [
  {
    id: "1",
    type: "Cuenta Corriente",
  },
  {
    id: "2",
    type: "Cuenta de Ahorro",
  },
  {
    id: "3",
    type: "Cuenta de Nómina",
  },
];

interface Props {
  handleNewAccount: (newAccount: Account) => void;
}

export const NewAccountFormComponent: React.FC<Props> = (props) => {
  const { handleNewAccount } = props;

  const [account, setAccount] = React.useState<Account>(createEmptyAccount());

  const [errors, setErrors] = React.useState<AccountError>(
    createEmptyAccountError()
  );

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = await validateNewAccountForm(account);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeded) {
      handleNewAccount(account);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta: </label>
            <select
              onChange={handleOnChange}
              name="type"
              className={classes.typeSelect}
            >
              <option value="">Seleccionar</option>
              {accountTypes.map((accountType) => {
                return (
                  <option key={accountType.id} value={accountType.id}>
                    {accountType.type}
                  </option>
                );
              })}
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias: </label>
            <input
              name="name"
              className={classes.alias}
              onChange={handleOnChange}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button type="submit" className={classes.button}>
          GUARDAR
        </button>
      </form>
    </div>
  );
};
