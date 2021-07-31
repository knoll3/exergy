import { createUseStyles } from "react-jss";
import { Theme } from "types/Theme";
import ExergyLogo from "exergy-logo.svg";

export const useStyles = createUseStyles((theme: Theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    height: 48,
    display: "flex",
    background: theme.palette.background.secondary,
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.primary}`,
  },
  glow: {
    width: "100%",
    left: 0,
    bottom: 0,

    zIndex: -1,
    boxShadow: `0px 0px 10px 2px ${theme.palette.primary}`,
  },
  logo: {
    height: 32,
    width: 32,
    marginLeft: theme.spacing(2),
  },
}));
