import { Home } from "pages/Home";
import { Docs } from "pages/Docs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/docs" component={Docs} />
            </Switch>
        </Router>
    );
}

export default App;
