import React from "react";
import { Account, createEmptyAccount } from "../newAccount.vm";
import classes from "./newAccount-form.component.module.css";

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

export const NewAccountFormComponent: React.FC = () => {
  const [account, setAccount] = React.useState<Account>(createEmptyAccount());

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

  return (
    <div>
      <form>
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
          </div>
          <div>
            <label>Alias: </label>
            <input name="name" className={classes.alias} />
          </div>
        </div>
        <button type="submit" className={classes.button}>
          GUARDAR
        </button>
      </form>
    </div>
  );
};
