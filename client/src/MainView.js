/* The Authenticated View (after logging in) */

import React from "react";
// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Dashboard from "./react-components/Dashboard";

function MainView(props) {
  const { setScreen } = props;

  const deleteSession = () => {
    const url = "/users/logout";

    fetch(url)
      .then(res => {
        setScreen("noAuth");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={["/", "/dashboard"]}
          render={({ history }) => (
            <Dashboard logout={deleteSession} history={history} />
          )}
        />
        <Route render={() => <div>404 Not found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default MainView;
