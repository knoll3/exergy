import { createUseStyles } from "react-jss";
import { Theme } from "types/Theme";

export const useStyles = createUseStyles((theme: Theme) => ({
    mainLayout: {
        display: "flex",
        width: "100%",
    },
    flexContainer: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
    content: {
        paddingTop: theme.spacing(8),
        width: 800,
    },
}));
