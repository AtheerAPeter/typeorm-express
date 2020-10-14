export let validator = {} as any;

//we return a function because we can use the same schema to add and edit so we can turn off required fields when the clinet requests an edit so he can send only one
validator.addArticle = (add = true) => ({
  title: {
    presence: add,
    type: "string",
  },
  text: {
    presence: add,
    type: "string",
  },
  image: {
    presence: add,
    type: "string",
  },
});

validator.login = (add = true) => ({
  email: {
    presence: add,

    email: true,
  },
  password: {
    presence: add,

    length: {
      minimum: 4,
    },
  },
});

validator.signin = (add = true) => ({
  email: {
    presence: add,

    email: true,
  },
  password: {
    presence: add,

    length: {
      minimum: 4,
    },
  },
  name: {
    presence: add,
    type: "string",
  },
});

// module.exports = validator;
