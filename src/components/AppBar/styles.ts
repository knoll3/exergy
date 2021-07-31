import { createUseStyles } from "react-jss";
import { Theme } from "types/Theme";
import ExergyLogo from "exergy-logo.svg";

export const useStyles = createUseStyles((theme: Theme) => ({
  appBar: {
    height: 48,
    display: "flex",
    background: theme.palette.background.secondary,
    alignItems: "center",
  },
  logo: {
    height: 32,
    width: 32,
    marginLeft: theme.spacing(2),
  },
}));
