import React from "react";
import { useStyles } from "./styles";

export const Timeline: React.FC = () => {
    const classes = useStyles();
    return <div className={classes.timeline}></div>;
};
