import { createUseStyles } from "react-jss";
import { Theme } from "types/Theme";

export const useStyles = createUseStyles((theme: Theme) => ({
    app: {
        background: theme.palette.background.primary,
        height: "100vh",
        display: "flex",
        overflow: "hidden",

        // Set the default text color
        color: theme.palette.text.primary,
    },
}));
