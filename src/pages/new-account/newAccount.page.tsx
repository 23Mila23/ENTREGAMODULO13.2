import { AppLayout } from "@/layaouts";
import React from "react";
import { Account, createEmptyAccount } from "./newAccount.vm";
import {NewAccountFormComponent} from "./components/newAccount-form.component"

export const NewAccount : React.FC = () => {
const [account, /*setAccount*/] = React.useState<Account>(createEmptyAccount());

return (
<AppLayout>
    <div>
        <h1>Cuenta Bancaria</h1>
        <NewAccountFormComponent account={account}>

        </NewAccountFormComponent>
    </div>
</AppLayout>
)

}