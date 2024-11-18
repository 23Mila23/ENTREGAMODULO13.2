import React from "react";
import logoHeader from "/assets/logo_header_white.svg";
import classes from "./header.component.module.css";
import { useProfileContext } from "@/core/profile";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const HeaderComponent: React.FC = () => {
  const { userName } = useProfileContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    !userName && navigate(appRoutes.root)
  }, [])
  
  return (
    <header className={classes.header}>
      <div>
        <img src={logoHeader} className={classes.headerLogo} />
        <div className={classes.usuario}>
          <p>Bienvenido {userName}</p>
        </div>
      </div>
    </header>
  );
};
