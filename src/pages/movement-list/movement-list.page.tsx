import { AppLayout } from "@/layaouts";
import React from "react";
import { MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { useAccountDataContext } from "@/core/profile/account.context";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { getMovements } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const { iban, saldo, accountId } = useAccountDataContext();
  React.useEffect(() => {
    accountId && getMovements(accountId).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <span> Saldo disponible : {saldo}€</span>
        </div>
        <div className={classes.headerContainer2}>
          <span>Alias: Gastos mes</span>
          <span>IBAN: {iban}</span>
        </div>
        <MovementListTableComponent
          movementList={movementList}
        ></MovementListTableComponent>
      </div>
    </AppLayout>
  );
};
