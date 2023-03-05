const { INVALID_INPUT, SERVER_ERROR } = require('./utils');

class InvalidInput extends Error {
  constructor(message) {
    super(message);
    this.statusCode = INVALID_INPUT;
  }
}
//how to call it
//next(new InvalidInput('message goes here'))

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = SERVER_ERROR;
  }
}

class WrongUsernamePassword extends Error {
  //used for incorrect username and incorrect password
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = {
  InvalidInput,
  ServerError,
  WrongUsernamePassword,
};