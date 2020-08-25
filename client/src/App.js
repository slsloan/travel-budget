// dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// page components
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import NotFound from "./pages/NotFound";

// components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// styles
import "./css/styles.css";

function App() {
  return (
    <Router>
      <div id="app-content">
        <Navbar/>
        <div id="router-content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/trip" component={Trip} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
