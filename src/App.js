import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Add from "./components/Header/Add";
import Header from "./components/Header/Header";
import WatchList from "./components/Header/WatchList";
import Watched from "./components/Header/Watched";
import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Header/Home";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/watchlist">
              <WatchList />
            </Route>
            <Route path="/watched">
              <Watched />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
