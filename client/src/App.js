// dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

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
  return (
    <Router>
      <div id="app-content">
        <Navbar />
        <div id="router-content" className="background-picture">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/trip" component={Trip} />
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
