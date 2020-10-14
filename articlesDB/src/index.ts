import "reflect-metadata";
import { createConnection } from "typeorm";
import { find, Foo } from "../mufunc";

createConnection()
  .then(async (connection) => {
    // await Foo().catch((err) => {
    //   console.log("error", err);
    // });
    // await find().catch((err) => console.log("error in find index: ", err));
  })
  .catch((error) => console.log(error));
