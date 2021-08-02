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
    position: "relative",

    transition: "all 0.2s",
  },

  // Variant
  outlined: {
    background: "inherit",
    border: `2px solid ${theme.palette.text.secondary}`,
    color: theme.palette.text.secondary,

    "&:hover": {
      filter: "brightness(150%)",

      "&:after": {
        content: '""',
        zIndex: -1,
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        boxShadow: `0px 0px 10px 2px ${theme.palette.primary}`,
      },
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
