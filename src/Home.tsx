import Container from "./Container"
import {User, Message} from "./interfaces";

interface UserMessage {
  users: User[];
  messages: Message[];
}

function Home(props: UserMessage){
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Container users={props.users} />
        </div>
        <div className="col-6">
          <Container messages={props.messages} />
        </div>
      </div>
    </div>
  )
}

export default Home;