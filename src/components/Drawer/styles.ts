import { createUseStyles } from "react-jss";
import { Theme } from "types/Theme";

export const useStyles = createUseStyles((theme: Theme) => ({
    drawer: {
        height: "100vh",
        background: theme.palette.background.secondary,
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));
