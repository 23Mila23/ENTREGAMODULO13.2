import React from "react";

interface Context {
  iban: string;
  saldo: string;
  accountId : string;
  setAccountData: (iban: string, saldo: string, accountId : string) => void;
}

const AccountDataContext = React.createContext<Context>({
  iban: "",
  saldo: "",
  accountId : "",
  setAccountData: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AccountDataProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [iban, setIban] = React.useState<string>("");
  const [saldo, setSaldo] = React.useState<string>("");
  const [accountId, setAccountId] = React.useState<string>("");
  
  const setAccountData = (iban: string, saldo: string, accountId : string) => {
    setIban(iban);
    setSaldo(saldo);
    setAccountId(accountId)
  };

  return (
    <AccountDataContext.Provider
      value={{
        iban: iban,
        saldo: saldo,
        accountId : accountId,
        setAccountData,
      }}
    >
      {children}
    </AccountDataContext.Provider>
  );
};

export const useAccountDataContext = () => React.useContext(AccountDataContext)