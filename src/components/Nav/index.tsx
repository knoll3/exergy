import { Drawer } from "components/Drawer";
import React from "react";
import { useHistory } from "react-router-dom";
import { Route } from "types/Route";
import { useStyles } from "./styles";

interface NavProps {
    routes: Route[];
}

export const Nav: React.FC<NavProps> = ({ children, routes }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleRouteClick = (path: string) => {
        history.push(path);
    };

    return (
        <div className={classes.nav}>
            <Drawer>
                <div className={classes.drawerContents}>
                    {routes.map((route) => (
                        <button
                            key={route.path}
                            className={classes.navLink}
                            onClick={() => handleRouteClick(route.path)}
                        >
                            {route.name}
                        </button>
                    ))}
                </div>
            </Drawer>
        </div>
    );
};
