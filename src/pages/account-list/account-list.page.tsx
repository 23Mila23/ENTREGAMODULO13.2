import { AppLayout } from "@/layaouts";
import React from "react";
import { AccountVm } from "./account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { deleteAccount, getAccountList } from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  const navigate = useNavigate();

  const handleButtonOnClick = () => {
    navigate(appRoutes.newAccount);
  };

  const handleItemDeleted = (accountId: string) => {
    deleteAccount(accountId);
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis cuentas</h1>
          <button onClick={handleButtonOnClick}> AGREGAR NUEVA CUENTA</button>
        </div>
        <AccountListTableComponent
          accountList={accountList}
          handleItemDeleted={handleItemDeleted}
        ></AccountListTableComponent>
      </div>
    </AppLayout>
  );
};
