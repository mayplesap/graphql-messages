import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Message } from "./interfaces";
import UserMessagesApi from "./api";

interface Params {
  username: string
}

/** UserDetail
 * 
 */
function UserDetail(): React.ReactElement {
  const { username } = useParams<Params>();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    messages: []
  });

  useEffect(function getUserOnRender(): void {
    async function getUser(): Promise<void> {
      let response = await UserMessagesApi.getUser(username);
      console.log("RESPONSE", response)
      setUser(response.user)
      setIsLoading(false);
    }
    getUser();
  }, [username]);

  if(isLoading) return <h1>...Loading...</h1>

  return (
    <div className="UserDetail">
      <h3>Username: {user.username}</h3>
      <h2>First Name: {user.first_name}</h2>
      <h2>Last Name: {user.last_name}</h2>
      {user.messages?.map((m: Message) => (
          <p>{m.body}</p>
        ))
      }
    </div>
  )
}

export default UserDetail;