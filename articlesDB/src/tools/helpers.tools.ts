const bcrypt = require("bcrypt");
//this is just a return object formatted so we can use everywhere

//when theres error we use this
export const resError = (res, error, statusCode = 400) => {
  let data = { status: false, error };
  res.statusCode = statusCode;
  return res.json(data);
};

//when theres no error we use this
export const resData = (res, data, statusCode = 200) => {
  let response = { status: true, data };
  res.statusCode = statusCode;
  return res.json(response);
};

//hash
export const hashMe = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;

  // bcrypt.genSalt(10, function (err, salt) {
  //   bcrypt.hash(req.body.password, salt, function (err, hash) {
  //     // Store hash in your password DB.
  //     return hash;
  //   });
  // });
};
