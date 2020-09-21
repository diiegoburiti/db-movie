import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
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
