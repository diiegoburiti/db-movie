import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Add from "./pages/Add";
import Header from "./components/Header/Header";
import WatchList from "./pages/WatchList";
import Watched from "./pages/Watched";
import { GlobalProvider } from "./context/GlobalState";
import Home from "./pages/Home";
import NotFound from "./components/Helper/NotFound";

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
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
