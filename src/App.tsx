import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from "react-router-dom";
import UserMessagesApi from "./api";
import Routes from "./Routes";
import Nav from "./Nav";

function App(): React.ReactElement {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
