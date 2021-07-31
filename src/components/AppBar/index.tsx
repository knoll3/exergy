import React from "react";
import { useStyles } from "./styles";
import ExergyLogo from "exergy-logo.svg";

interface AppBarProps {}

export const AppBar: React.FC<AppBarProps> = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.appBar}>
      <div className={classes.container}>
        <img className={classes.logo} src={ExergyLogo} alt="exergy-logo" />
      </div>
      <div className={classes.glow}></div>
    </div>
  );
};
