import { createUseStyles } from "react-jss";
import { Theme } from "types/Theme";

export const useStyles = createUseStyles((theme: Theme) => ({
    timeline: {
        height: 100,
        width: "100%",
        border: `1px solid ${theme.palette.divider}`,
    },
}));
