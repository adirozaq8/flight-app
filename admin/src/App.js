import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminPanel from "./pages/Admin";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={AdminPanel} />
      </Switch>
    </div>
  );
}

export default App;
