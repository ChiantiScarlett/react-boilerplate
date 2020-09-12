import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { viewRoutes } from "services/routes";
import { RootContext, initialValue } from "services/context";

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
  const [context, setContext] = useState(initialValue);
  return (
    <RootContext.Provider value={[context, setContext]}>
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
