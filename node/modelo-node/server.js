import "dotenv/config";

import express from "express";
import routes from "./routes.js";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "connect-flash";
import csrf from "csurf";
import { dirname, resolve } from "path"; // CommonJS
import { fileURLToPath } from "url";
// import helmet from "helmet";
import {
  checkCsrfError,
  csrfMiddleware,
  middlewareGlobal
} from "./src/middlewares/middlewares.js";

const app = express();
const PORT = 3333;
const HOST = "0.0.0.0";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(resolve(__dirname, "public")));

// app.use(helmet());

mongoose
  .connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    console.log("database is ready!");
    app.emit("ready");
  })
  .catch((e) => {
    console.log(e);
  });

const sessionOptions = session({
  secret: "akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()",
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_CONNECTION }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.set("views", resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());

app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(middlewareGlobal)
app.use(routes);

app.on("ready", () => {
  app.listen(PORT, HOST, () => {
    console.log("server is running!");
  });
});
