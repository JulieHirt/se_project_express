const userRouter = require('express').Router(); // create a router
// import the celebrate validators
const {
  ValidatePatchUserProfile,
  ValidatePatchUserAvatar,
  ValidateUserId,
} = require('../middleware/validation');
const {
  getCurrentUser,
  getUsers,
  getUser,
  updateUserInfo,
  updateUserAvatar,
} = require('../controllers/users');

// GET http://localhost:3000/users
userRouter.get('/users', getUsers);

// THIS MUST come before get('/users/:id
// we need to check for the word "me" after users before we check for an id
// GET http://localhost:3000/users/me
// get info about current user
userRouter.get('/users/me', getCurrentUser);

// GET http://localhost:3000/users/8340d0ec33270a25f2413b69
userRouter.get('/users/:id', ValidateUserId, getUser);

// patch new user description ("about")
userRouter.patch('/users/me', ValidatePatchUserProfile, updateUserInfo);

// patch new user avatar (image link)
userRouter.patch('/users/me/avatar', ValidatePatchUserAvatar, updateUserAvatar);

module.exports = userRouter;
