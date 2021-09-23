import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import bodyParser from "body-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import jwtCheck from "./middleware/auth.js";
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use(jwtCheck);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
