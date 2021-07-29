import { Home } from "pages/Home";
import { Docs } from "pages/Docs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import { darkTheme } from "theme/dark-theme";
import { useStyles } from "./styles";

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/docs" component={Docs} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
