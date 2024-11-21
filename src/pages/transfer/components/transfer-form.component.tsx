import React from "react";
import {
  AccountVm,
  createEmptyTransferError,
  createEmptyTransferVm,
  TransferError,
  TransferVm,
} from "../transfer.vm";
import { validateForm } from "../validations";
import classes from "./transfer-form.component.module.css";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId?: string
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer, defaultAccountId } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransferVm()
  );

  const [errors, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  React.useEffect(() => {
    setTransfer({
      ...transfer,
      accountId : defaultAccountId ?? ""
    })

  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(transfer);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeded) {
      onTransfer(transfer);
    }
  };

  const handleFieldChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({
      ...transfer,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Seleccione cuenta de origen</label>
            <select
              name="accountId"
              onChange={handleFieldChange}
              value={transfer.accountId}
              className={classes.large}
            >
              {accountList.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              ))}
              <option value="">Seleccione una cuenta</option>
            </select>
            <p className={classes.error}>{errors.accountId}</p>
          </div>
          <div>
            <label>Ingrese el IBAN de destino: </label>
            <input
              name="iban"
              className={classes.large}
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.iban}</p>
          </div>
          <div>
            <label>Beneficiario: </label>
            <input
              name="name"
              className={classes.large}
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
          <div>
            <label>Importe: </label>
            <input
              type="number"
              className={classes.small}
              name="amount"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.amount}</p>
          </div>
          <div>
            <label>Concepto: </label>
            <input
              name="concept"
              className={classes.large}
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.concept}</p>
          </div>
          <div>
            <label>Observaciones: </label>
            <input
              name="notes"
              className={classes.large}
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.notes}</p>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <p>
              Para que la transferencia se realice en otra fecha diferente a la
              de hoy, por favor, indíquenos la fecha de ejecución:
            </p>
            <div>
              <label>Fecha de ejecución</label>
              <input
                name="realDateTransfer"
                type="date"
                onChange={handleFieldChange}
              />
              <p className={classes.error}>{errors.realDateTransfer}</p>
            </div>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <p>
              Escriba una dirección de email para dar aviso al beneficiario:{" "}
            </p>
            <div>
              <label>Email del beneficiario: </label>
              <input
                name="email"
                className={classes.large}
                onChange={handleFieldChange}
              />
              <p className={classes.error}>{errors.email}</p>
            </div>
          </div>
        </div>
        <button type="submit" className={classes.button}>
          REALIZAR TRANSFERENCIA
        </button>
      </form>
    </div>
  );
};

