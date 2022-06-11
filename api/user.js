const express = require('express');
const usersRouter = express.Router();
const { getAllUsers } = require('../db');


usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  res.send({ message: 'hello from /users!' });
});

module.exports = usersRouter;
const express = require('express');
const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next(); // THIS IS DIFFERENT
});

usersRouter.get('/', (req, res) => {
    const users = await getAllUsers();
  res.send({
    users: []
  });
});

module.exports = usersRouter;