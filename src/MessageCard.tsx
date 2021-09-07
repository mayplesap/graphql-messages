import {Message} from "./interfaces";

interface MessageProps {
    message: Message;
}

function MessageCard(props: MessageProps): React.ReactElement {
    return (
        <div>
            <p>Message: {props.message.body}</p>
            <p>User: {props.message.user.username}</p>
        </div>
    )
  }
  
  export default MessageCard;