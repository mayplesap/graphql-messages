import { Message } from "./interfaces";

interface MessageProps {
  message: Message;
}

function MessageCard(props: MessageProps): React.ReactElement {
  return (
    <div className="card mb-2 bg-light">
      <div className="card-body">
        <p className="card-text">Message: {props.message.body}</p>
        <p className="card-text">User: {props.message.user.username}</p>
      </div>
    </div>
  )
}

export default MessageCard;