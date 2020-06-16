// React
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Landing from "./pages/Landing/Landing";
import ScrollToTop from "./components/HigherOrder/ScrollToTop";

// Styling
import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
