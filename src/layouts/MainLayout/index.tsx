import { Nav } from "components/Nav";
import React from "react";
import { routes } from "routes";
import { useStyles } from "./styles";

export const MainLayout: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.mainLayout}>
            <Nav routes={routes} />
            <div className={classes.flexContainer}>
                <div className={classes.content}>{children}</div>
            </div>
        </div>
    );
};
