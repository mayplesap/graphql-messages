import {User} from "./interfaces";

interface UserProps {
    user: User;
}

function UserCard(props: UserProps): React.ReactElement {
    return (
        <div>
            <p>Username: {props.user.username}</p>
            <p>First Name: {props.user.firstName}</p>
            <p>Last Name: {props.user.lastName}</p>
        </div>
    )
  }
  
  export default UserCard;