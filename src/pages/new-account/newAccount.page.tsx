import { AppLayout } from "@/layaouts";
import React from "react";
import { NewAccountFormComponent } from "./components/newAccount-form.component";
import classes from "./newAccount.page.module.css";
import { Account } from "./newAccount.vm";

export const NewAccount: React.FC = () => {

  const handleNewAccount = (newAccount : Account) => {
    console.log(newAccount)
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
