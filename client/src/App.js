// dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// page components
import Login from "./pages/Login";
import Account from "./pages/Signup";
import Trip from "./pages/Trip";
import NotFound from "./pages/NotFound";

// components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Budget from "./components/Budget";

// styles
import "./css/styles.css";

function App() {
  // state hooks
  const [user, setUser] = useState({});
  console.log(user);

  return (
    <Router>
      <div id="app-content">
        <Navbar user={user} />
        <div id="router-content" className="background-picture">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Login {...props} setUser={setUser} />;
              }}
            />
            <Route exact path="/account" component={Account} />
            <Route
              exact
              path="/trip/:slug"
              render={(props) => {
                return <Trip {...props} user={user} setUser={setUser} />;
              }}
            />
            <Route exact path="/budget" component={Budget} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
