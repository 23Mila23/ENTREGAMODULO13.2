import { AppLayout } from "@/layaouts";
import React from "react";
import { NewAccountFormComponent } from "./components/newAccount-form.component";
import classes from "./newAccount.page.module.css";
import { Account } from "./newAccount.vm";
import { saveAccount } from "./api";

export const NewAccount: React.FC = () => {

  const handleNewAccount = (newAccount : Account) => {
    saveAccount(newAccount).then((result) => {
      if(result) {
        alert("Cuenta creada con éxito")
      } else {
        alert("Error al crear la cuenta")
      }
    })
  }
  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <NewAccountFormComponent handleNewAccount={handleNewAccount} />
      </div>
    </AppLayout>
  );
};
