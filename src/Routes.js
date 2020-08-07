import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import NotFound from "./components/NotFound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Landing} path="/" exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
