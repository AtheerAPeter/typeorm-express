const express = require("express");
import { defaultMiddleware, auth } from "./middleware";

//using router from express to get the routes in a seperate file then export them to the main one (app.js)
const router = express.Router();
//
import {
  getArticles,
  singleAdd,
  singleRequest,
  editOne,
  login,
  signin,
} from "./controllers";

//route handler
router.get("/articles", getArticles);

// only one
router.get("/article/:id", singleRequest);

// add
router.post("/articles", auth, singleAdd);

//edit one
router.put("/articles", auth, editOne);

//login
router.post("/login", login);

//sign in
router.post("/signin", signin);

module.exports = router;
