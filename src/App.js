// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Tracking from "./components/Tracking";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route exact path="/" component={Dashboard} />
            <Route path="/orders" component={Orders} />
            <Route path="/tracking/:trackingId" component={Tracking} />
          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
