import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Messages from "./Messages";
import NewUserForm from "./NewUserForm";
import NewMessageForm from "./NewMessageForm";

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
        
        <Route exact path="/add-user">
          <NewUserForm createUser={(username, firstName, lastName) => null}/>
        </Route>

        <Route exact path="/add-message">
          <NewMessageForm createMessage={(username, message) => null}/>
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;