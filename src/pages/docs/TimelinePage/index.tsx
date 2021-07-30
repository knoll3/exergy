import React from "react";
import { useStyles } from "./styles";
import { Timeline } from "components/Timeline";

export const TimelinePage: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.timelinePage}>
            <div className={classes.title}>Timeline Page</div>
            <Timeline />
        </div>
    );
};
