import { useStyles } from "./styles";
import { routes } from "routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainLayout } from "layouts/MainLayout";

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <Router>
                <MainLayout>
                    <Switch>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={route.path}
                                component={route.component}
                            />
                        ))}
                    </Switch>
                </MainLayout>
            </Router>
        </div>
    );
}

export default App;
