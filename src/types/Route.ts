export interface Route {
    name: string;
    path: string;
    exact: boolean;
    component: React.FC;
}
