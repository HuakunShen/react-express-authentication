import React from "react";
import Button from "@material-ui/core/Button";

import "./../../App.css";
import "./styles.css";

/* The Header Component */
class Header extends React.Component {
  render() {
    const { title, subtitle, logout } = this.props;

    return (
      <div className="header">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <Button
          onClick={logout}
          className="app__horizontal-center"
          variant="contained"
        >
          Logout
        </Button>
      </div>
    );
  }
}

export default Header;
