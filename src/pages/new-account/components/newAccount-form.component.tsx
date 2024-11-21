import { Account } from "../newAccount.vm";
import classes from "./newAccount-form.component.module.css"

interface Props {
  account: Account;
}
export const NewAccountFormComponent: React.FC<Props> = (props) => {
  const { account } = props;

  return (
    <div>
      <form>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta: </label>
            <select className={classes.typeSelect}>
              <option key={account.type} value={account.type}>
                {account.type}
              </option>
            </select>
          </div>
          <div>
            <label>Alias: </label>
            <input className={classes.alias}></input>
          </div>
        </div>
        <button type="submit" className={classes.button}>GUARDAR</button>
      </form>
    </div>
  );
};
