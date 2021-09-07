import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from "react-router-dom";
import UserMessagesApi from "./api";
import Routes from "./Routes";
import Nav from "./Nav";

function App(): React.ReactElement {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function createUser() {
  
  }

  async function createMessage() {}

  async function getAllUserMessages() {
    setIsLoading(true);
    let resultFromAPI = await UserMessagesApi.getAllUserMessages();
    setUsers(resultFromAPI.users);
    setMessages(resultFromAPI.messages);
    setIsLoading(false);
  }

  useEffect(() => {
    getAllUserMessages();
  }, []);

  if (isLoading) {
    return <h1>...Loading...</h1>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes users={users} messages={messages}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
