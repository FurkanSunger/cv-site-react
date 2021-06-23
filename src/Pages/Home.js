import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../components/About/About";
import NotFound from "../components/NotFound/NotFound";
import Welcome from "../components/Welcome/Welcome";
import Contact from "../components/Contact/Contact";
import Portfolio from "../components/Portfolio/Portfolio";
import Resume from "../components/Resume/Resume";
import PortfolioDetail from "../components/PortfolioDetail/PortfolioDetail";
import FixedComponents from "../components/FixedComponents/FixedComponents";

const Home = () => {
  return (
    <div className="home position-relative row w-100 m-0 p-0">
      <Router>
        <FixedComponents />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route
            exact
            path="/portfoliodetail/:id"
            component={PortfolioDetail}
          />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
