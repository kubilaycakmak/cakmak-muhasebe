import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import 'flowbite';

import MainLandingPage from "MainLandingPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
