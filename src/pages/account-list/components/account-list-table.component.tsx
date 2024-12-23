import React from "react";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-table.component.module.css";
import { AccountListItemComponent } from "./account-list-item.component";

interface Props {
  accountList: AccountVm[];
  handleItemDeleted: (accountId: string) => void;
}

export const AccountListTableComponent: React.FC<Props> = (props) => {
  const { accountList, handleItemDeleted } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>IBAN</span>
            <span className={classes.headerCell}>ALIAS</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
            <span className={classes.headerCell}>ÚLTIMA OPREACIÓN</span>
            <span className={classes.headerCell}>OPERACIÓN</span>
            <span className={classes.headerCell}>ACCIONES</span>

          </div>

          {accountList.map((account) => (
            <AccountListItemComponent key={account.id} accountItem={account} handleItemDeleted={handleItemDeleted} />
             
          ))}
        </div>
      </div>
    </>
  );
};
