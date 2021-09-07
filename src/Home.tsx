import UserCard from "./UserCard";
import MessageCard from "./MessageCard";
import {User, Message} from "./interfaces";

interface UserMessage {
  users: User[];
  messages: Message[];
}

function Home(props: UserMessage): React.ReactElement{
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-6">
          {props.users.map(u => (
            <UserCard user={u} key={u.username}/>
          ))}
        </div>
        <div className="col-6">
          {props.messages.map(m => (
            <MessageCard message={m} key={m.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;