import { createUseStyles } from "react-jss";
import { Theme } from "types/Theme";

export const useStyles = createUseStyles((theme: Theme) => ({
  button: {
    background: "none",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 4,
    color: theme.palette.text.primary,
    fontSize: theme.typography.small,
    // fontFamily: "'Mukta', sans-serif",
  },
}));
