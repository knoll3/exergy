import { createUseStyles } from "react-jss";
import { Theme } from "types/Theme";

export const useStyles = createUseStyles((theme: Theme) => ({
    timelinePage: {},
    title: {
        fontSize: theme.typography.title,
        marginBottom: theme.spacing(6),
    },
    body: {},
}));
