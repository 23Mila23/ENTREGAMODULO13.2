import { AppLayout } from "@/layaouts";
import React from "react";
import { Account, createEmptyAccount } from "./newAccount.vm";
import {NewAccountFormComponent} from "./components/newAccount-form.component"
import classes from "./newAccount.page.module.css"

export const NewAccount : React.FC = () => {
const [account, /*setAccount*/] = React.useState<Account>(createEmptyAccount());

return (
<AppLayout>
    <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <NewAccountFormComponent account={account}>

        </NewAccountFormComponent>
    </div>
</AppLayout>
)

}