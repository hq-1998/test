import React from "react";
import Navbar from "./views/Navbar";
import routes from "./routes";
import { renderRoutes, RouteConfig } from "react-router-config";
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Navbar />
      {renderRoutes(routes as RouteConfig[])}
    </div>
  );
}

export default connect((props, state) => Object.assign({}, props, state), {})(App);
