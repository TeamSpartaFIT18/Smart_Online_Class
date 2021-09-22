import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fnrh5opn.us.auth0.com"
      clientId="yLnTlRbSkc1MVlHLJIsiMvEhCGtbOWnu"
      redirectUri={window.location.origin}
      audience="https://dev-fnrh5opn.us.auth0.com/api/v2/"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
