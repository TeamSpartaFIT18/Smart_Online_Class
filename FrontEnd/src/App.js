import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginTest from "./Test/Login Test";
import Home from "./AppHome";
import RegistrationForm from "./components/SignUp/signUp";
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
          <Route exact path="/signup">
          <RegistrationForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
