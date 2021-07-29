import React from "react";
import { useStyles } from "./styles";

export const Home: React.FC = () => {
    const classes = useStyles();
    return <div className={classes.main}>Home</div>;
};
