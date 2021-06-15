import "./App.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/general/Home";
import Signup from "./components/pages/auth/Signup";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
