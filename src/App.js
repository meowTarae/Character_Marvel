import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Info from "./routes/Info";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/character/:id">
          <Info />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
