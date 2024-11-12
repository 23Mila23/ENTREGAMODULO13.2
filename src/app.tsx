import React from "react";

import "./style.css";
import { Router } from "./core/router";
import { ProfileProvider } from "./core/profile";
import { AccountDataProvider } from "./core/profile/account.context";

export const App: React.FC = () => {
  return (
    <AccountDataProvider>
      <ProfileProvider>
        <Router />
      </ProfileProvider>
    </AccountDataProvider>
  );
};
