const validate = require("validate.js");
//the schema in a different file to add different schemas
const validator = require("./tools/validator.tools");
const { resError, resData, hashMe } = require("./tools/helpers.tools");
//using jwt
//encoding a toekn with a secret
var jwt = require("jsonwebtoken");
const { async } = require("validate.js");

import { createConnection } from "typeorm";

let data = [
  {
    id: 1,
    title: "hellodasdasdad",
    text: "my text",
    image: "image",
  },
  {
    id: 2,
    title: "hello",
    text: "my text",
    image: "image",
  },
  {
    id: 3,
    title: "hello",
    text: "my text",
    image: "image",
  },
  {
    id: 4,
    title: "hello",
    text: "my text",
    image: "image",
  },
];

//return all data
export const getArticles = (req, res) => {
  return res.json(data);
};

//return a single on by id
export const singleRequest = (req, res) => {
  let id = req.params.id;

  let filteredData = data.filter((item) => item.id == id);
  if (filteredData.length > 0) {
    return res.json(filteredData);
  } else {
    res.statusCode = 404;
    return res.json("404 not found");
  }
};

//add one
export const singleAdd = (req, res) => {
  //get the request body
  let body = req.body;
  //check the request body

  //checking validation of the request body with the schema from the validator function then return if something doesnt match
  const isInvalid = validate(body, validator.addArticle());
  //we return an object with status so the front end job can be easier
  if (isInvalid) resError(res, isInvalid);

  //save
  let data = {
    id: Date.now(),
    ...body,
  };
  //send response
  return resData(res, data);
};

export const editOne = (req, res) => {
  let article = {
    id: 5,
    title: "title",
    text: "text",
    image: "image",
  };
  //get body
  let body = req.body;
  //validate
  let isValidate = validate(body, validator.addArticle(false));
  if (isValidate) res.json(resError(res, isValidate));
  //edit it
  Object.keys(body).forEach((item) => (article[item] = body[item]));
  //return
  return resData(res, article);
};

const user = {
  id: 1,
  email: "me@me.com",
  password: "admin",
};
export const login = (req, res) => {
  //validate the request
  const isInvalid = validate(req.body, validator.login());
  //we return an object with status so the front end job can be easier
  if (isInvalid) return resError(res, isInvalid);
  //check the email and the password

  if (req.body.email != user.email || req.body.password != user.password)
    return resError(res, "User is invalid");

  //if valid send token
  var token = jwt.sign({ id: user.id }, "shhhhh");
  return resData(res, token);
  //if not send him error
};

export const signin = async (req, res) => {
  //get data
  //validate data
  const isInvalid = validate(req.body, validator.signin());
  //we return an object with status so the front end job can be easier
  if (isInvalid) return resError(res, isInvalid);

  //check if email exist in db
  //checked
  //hash the password using a helper

  const hash = await hashMe(req.body.password);
  return resData(res, hash);
  //save to database
};
