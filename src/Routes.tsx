import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import UserDetail from "./UserDetail";
import NewUserForm from "./NewUserForm";
import NewMessageForm from "./NewMessageForm";
import {User, Message} from "./interfaces";

interface Props {
  users: User[];
  messages: Message[];
  createUser: (username: string, firstName: string, lastName:string) => void;
  createMessage: (username: string, message: string) => void;

}

/** Routes
 * 
 */
function Routes(props: Props): React.ReactElement{
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Home users={props.users} messages={props.messages}/>
        </Route>

        <Route exact path="/users/:username">
          <UserDetail />
        </Route>

        
        <Route exact path="/add-user">
          <NewUserForm createUser={props.createUser}/>
        </Route>

        <Route exact path="/add-message">
          <NewMessageForm createMessage={props.createMessage}/>
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;