import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./../../App.css";
import "./styles.css";

class Login extends React.Component {
  render() {
    const { setPassword, setUsername, auth } = this.props;

    return (
      <div className="login__bg-image center">
        <div className="login__card center">
          <h2>Student API</h2>

          <TextField
            name="username"
            label="Username"
            className="login__input app__input app__horizontal-center"
            margin="normal"
            onChange={e => setUsername(e.target.value)}
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            className="login__input app__input app__horizontal-center"
            margin="normal"
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            className="login__button app__horizontal-center"
            onClick={auth}
          >
            Log In
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
