import React from "react";

interface Context {
  iban: string;
  saldo: string;
  setAccountData: (iban: string, saldo: string) => void;
}

const AccountDataContext = React.createContext<Context>({
  iban: "",
  saldo: "",
  setAccountData: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AccountDataProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [iban, setIban] = React.useState<string>("");
  const [saldo, setSaldo] = React.useState<string>("");
  const setAccountData = (iban: string, saldo: string) => {
    setIban(iban);
    setSaldo(saldo);
  };

  return (
    <AccountDataContext.Provider
      value={{
        iban: iban,
        saldo: saldo,
        setAccountData,
      }}
    >
      {children}
    </AccountDataContext.Provider>
  );
};

export const useAccountDataContext = () => React.useContext(AccountDataContext)