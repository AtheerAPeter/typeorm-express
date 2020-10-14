const express = require("express");
const app = express();
import { notFound } from "./middleware";
const v1 = require("./routes");

import { resData, resError } from "./tools/helpers.tools";
import { createConnection } from "typeorm";
import { Article } from "./entity/Article";
import { getRepository } from "typeorm";
import { resolve } from "url";

createConnection().then((connection) => {
  const articleRepository = connection.getRepository(Article);

  //middleware
  app.use(express.json());

  //get all
  app.get("/v1/articles", async (req, res) => {
    const data = await articleRepository
      .find()
      .catch((err) => console.log(err));
    resData(res, data);
  });

  //get one
  app.get("/v1/article/:id", async (req, res) => {
    const data = await articleRepository
      .findOneOrFail({ id: req.params.id })
      .catch((err) => resError(res, "not found"));
    resData(res, data);
  });

  //last resort
  app.use(notFound);

  app.listen(5000, () => {
    console.log("connect on 5000");
  });
});

// //middleware
// //a middleware by express used if we want to send and recieve json in body

// app.use(defaultMiddleware);

// //routes from route file
// app.use("/v1", v1);

// //the last one that returns 404 if no rout match happened
