import { Account } from "../newAccount.vm";

interface Props {
  account: Account;
}
export const NewAccountFormComponent: React.FC<Props> = (props) => {
  const { account } = props;

  return (
    <div>
      <form>
        <div>
          <div>
            <label>Tipo de cuenta: </label>
            <select>
              <option key={account.type} value={account.type}>
                {account.type}
              </option>
            </select>
          </div>
          <div>
            <label>Alias: </label>
            <input></input>
          </div>
        </div>
        <button type="submit">GUARDAR</button>
      </form>
    </div>
  );
};
