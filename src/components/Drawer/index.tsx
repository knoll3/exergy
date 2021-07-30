import React from "react";
import { useStyles } from "./styles";

export const Drawer: React.FC = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.drawer}>{children}</div>;
};
