import { AppLayout } from "@/layaouts";
import React from "react";
import {NewAccountFormComponent} from "./components/newAccount-form.component"
import classes from "./newAccount.page.module.css"

export const NewAccount : React.FC = () => {

return (
<AppLayout>
    <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <NewAccountFormComponent />
    </div>
</AppLayout>
)

}