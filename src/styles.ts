import { createUseStyles } from "react-jss";
import { Theme } from "theme/theme";

export const useStyles = createUseStyles((theme: Theme) => ({
    app: {
        background: theme.palette.background.primary,
        height: "100vh",

        // Set the default text color
        color: theme.palette.text.primary,
    },
}));
