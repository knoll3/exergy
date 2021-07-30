import { useStyles } from "./styles";
import { routes } from "routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "components/Nav";

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <Router>
                <Nav routes={routes} />
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
            </Router>
        </div>
    );
}

export default App;
