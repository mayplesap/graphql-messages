import {User} from "./interfaces";

interface UserProps {
  user: User;
}

function UserCard(props: UserProps): React.ReactElement {
  return (
    <div className="card mb-2 bg-light">
      <div className="card-body">
        <p className="card-text">Username: {props.user.username}</p>
        <p className="card-text">First Name: {props.user.first_name}</p>
        <p className="card-text">Last Name: {props.user.last_name}</p>
      </div>
    </div>
  )
  }
  
  export default UserCard;