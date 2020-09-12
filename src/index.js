import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { viewRoutes } from "services/routes";
import { RootContext, initialValue } from "services/context";
import { LOCAL_STORAGE_NAME } from "services/settings";

/**
 * Wrapper for updating title
 */
const TitleUpdater = ({ title, children }) => {
  document.title = title;
  return <>{children}</>;
};

/**
 * Core Application
 */
const App = () => {
  // Create context reader & writer that syncs with localStorage:
  const [context, setContext] = useState(() => {
    try {
      const localData = localStorage.getItem(LOCAL_STORAGE_NAME);
      return localData ? JSON.parse(localData) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });
  const setContextAndStore = (data) => {
    try {
      setContext(data);
      window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RootContext.Provider value={[context, setContextAndStore]}>
      <BrowserRouter>
        <Switch>
          {Object.keys(viewRoutes).map((key, idx) => (
            <Route
              exact
              path={viewRoutes[key].path}
              key={idx}
              component={() => {
                const Component = viewRoutes[key].component;
                return (
                  <TitleUpdater title={viewRoutes[key].title}>
                    <Component />
                  </TitleUpdater>
                );
              }}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </RootContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
