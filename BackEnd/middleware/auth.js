import jwt from "express-jwt";
import jwks from "jwks-rsa";

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-fnrh5opn.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://dev-fnrh5opn.us.auth0.com/api/v2/",
  issuer: "https://dev-fnrh5opn.us.auth0.com/",
  algorithms: ["RS256"],
}).unless({ path: ["/"] });

export default jwtCheck;
