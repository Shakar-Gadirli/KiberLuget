import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Home from "./components/Home_Component"
import Articles from "./components/Articles_Component";

function App() {
  return (
    <Router>
      <div className="container">
      <br/>
      <Route exact path="/" component={() => (<Redirect to='/home' />)} />
      <Route path="/home" exact component={Home} />
      <Route path="/articles" component={Articles} />
      </div>
    </Router>
  );
}

export default App;
