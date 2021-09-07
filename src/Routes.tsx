import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Messages from "./Messages";

function Routes(): React.ReactElement{
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/users">
          <Users />
        </Route>

        <Route exact path="/messages">
          <Messages />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;