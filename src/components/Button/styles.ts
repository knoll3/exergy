import { createUseStyles } from "react-jss";
import { Theme } from "types/Theme";

export const useStyles = createUseStyles((theme: Theme) => ({
  // Base
  button: {
    borderRadius: 1,
    fontFamily: theme.fontFamily,
    padding: "0.5em 1em 0.5em 1em",
    fontWeight: "bold",
    cursor: "pointer",
  },

  // Variant
  outlined: {
    background: "none",
    border: `2px solid ${theme.palette.text.secondary}`,
    color: theme.palette.text.secondary,

    "&:hover": {
      filter: "brightness(150%)",
    },
    "&:active": {
      background: theme.palette.text.secondary,
      color: theme.palette.background.primary,
    },
  },

  contained: {
    background: theme.palette.primary,
    color: theme.palette.background.primary,
    border: `2px solid ${theme.palette.primary}`,

    "&:hover": {
      filter: "brightness(115%)",
    },
    "&:active": {
      filter: "brightness(130%)",
    },
  },

  // Size
  small: {
    fontSize: theme.typography.small,
  },

  medium: {
    fontSize: theme.typography.medium,
  },

  large: {
    fontSize: theme.typography.large,
  },
}));
