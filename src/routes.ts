import { TimelinePage } from "pages/docs/Timeline";
import { Home } from "pages/Home";
import { Route } from "types/Route";

export const routes: Route[] = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: Home,
    },
    {
        name: "Timeline",
        path: "/docs/timeline",
        exact: true,
        component: TimelinePage,
    },
];
