import React, { useState } from "react";

import "./App.css";

import MainView from "./MainView";
import Login from "./react-components/Login";

function App() {
  const [screen, setScreen] = useState("noAuth");
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const auth = () => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/users/login", {
      method: "post",
      body: JSON.stringify({ email: username, password: password }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });

    // Send the request with fetch()
    fetch(request)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(json => {
        if (json.screen !== undefined) {
          setScreen(json.screen);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const readCookie = () => {
    const url = "/users/check-session";

    fetch(url)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(json => {
        if (json.screen !== undefined) {
          setScreen(json.screen);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Check if there is a session
  readCookie();

  return (
    <div className="app">
      {screen === "noAuth" ? (
        <Login
          auth={auth}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <MainView screen={screen} setScreen={setScreen} />
      )}
    </div>
  );
}

export default App;
