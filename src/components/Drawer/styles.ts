import { createUseStyles } from "react-jss";
import { Theme } from "types/Theme";

export const useStyles = createUseStyles((theme: Theme) => ({
    drawer: {
        height: "100vh",
        background: theme.palette.background.secondary,
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(9),
        paddingRight: theme.spacing(9),
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));
