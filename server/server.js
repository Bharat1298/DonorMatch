import express from "express";
import cors from "cors";
import charities from "./routes/charities.js";
import users from "./routes/users.js";
import pkg from 'express-openid-connect';

const { auth } = pkg;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_CLIENT_SECRET,
  baseURL: 'http://localhost:5050',
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: 'https://dev-aqub8gqznc04dp41.us.auth0.com'
};

const PORT = process.env.PORT || 5050;
const app = express();

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.use(cors());
app.use(express.json());
app.use("/users", users);
app.use("/charities", charities);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
