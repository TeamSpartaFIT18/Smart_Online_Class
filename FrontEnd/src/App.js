import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginTest from "./Test/Login Test";
import Home from "./AppHome";
import AdminHome from "./Test/AdminHome";
import UserHome from "./Test/UserDash";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginTest />
          </Route>
          <Route exact path="/admin">
            <AdminHome />
          </Route>
          <Route exact path="/user">
            <UserHome />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
