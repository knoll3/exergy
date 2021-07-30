import { createUseStyles } from "react-jss";
import { Theme } from "types/Theme";

export const useStyles = createUseStyles((theme: Theme) => ({
    nav: {},
    drawerContents: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    navLink: {
        border: "none",
        background: "none",
        color: theme.palette.text.primary,
        cursor: "pointer",
        fontSize: theme.typography.medium,
        marginBottom: theme.spacing(2),
    },
}));
