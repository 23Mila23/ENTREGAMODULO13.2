import React from "react";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-item.component.module.css";
import { generatePath, Link, useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { useAccountDataContext } from "@/core/profile/account.context";

const ACTION_NONE = "";
const ACTION_TRANSFER = "1";
const ACTION_MOVEMENTS = "2";

interface Props {
  accountItem: AccountVm;
  handleItemDeleted: (accountId: string) => void;
}

export const AccountListItemComponent: React.FC<Props> = (props) => {
  const { accountItem, handleItemDeleted } = props;
  const navigate = useNavigate();
  const { setAccountData } = useAccountDataContext();

  const handleSelectedOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    switch (e.target.value) {
      case ACTION_TRANSFER:
        navigate(
          generatePath(appRoutes.transferFromAccount, { id: accountItem.id })
        );
        break;
      case ACTION_MOVEMENTS:
        setAccountData(accountItem.iban, accountItem.balance, accountItem.id);
        navigate(generatePath(appRoutes.movements, { id: accountItem.id }));
        break;
    }
  };

  const handleDeleteButtonOnClick = () => {
    handleItemDeleted(accountItem.id);
  };

  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell} ${classes.bold}`}>
        <Link to={generatePath(appRoutes.movements, { id: accountItem.id })}>
          {accountItem.iban}
        </Link>
      </span>
      <span className={classes.dataCell}>{accountItem.name}</span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {accountItem.balance}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {accountItem.lastTransaction.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.selectContainer}`}>
        <select
          className={classes.select}
          onChange={handleSelectedOptionChange}
        >
          <option value={ACTION_NONE}>Seleccionar</option>
          <option value={ACTION_TRANSFER}>Transferir</option>
          <option value={ACTION_MOVEMENTS}>Movimientos</option>
        </select>
      </span>
      <span className={classes.dataCell}>
        <button onClick={handleDeleteButtonOnClick}>Eliminar</button>
      </span>
    </div>
  );
};
