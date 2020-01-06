import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
