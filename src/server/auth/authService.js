const bcrypt = require('bcryptjs');
const { findUserByUsername, createUser } = require('./userRepository');

const toSessionUser = (user) => ({
  id: user._id.toString(),
  username: user.username,
  name: user.name,
});

const signupUser = async (collections, { username, name, password }) => {
  if (!username || !password) {
    const error = new Error('Username and password are required.');
    error.status = 400;
    throw error;
  }

  const existingUser = await findUserByUsername(collections, username);
  if (existingUser) {
    const error = new Error('Username already taken.');
    error.status = 400;
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await createUser(collections, { username, name, passwordHash });
  return toSessionUser(user);
};

const loginUser = async (collections, { username, password }) => {
  if (!username || !password) {
    const error = new Error('Username and password are required.');
    error.status = 400;
    throw error;
  }

  const user = await findUserByUsername(collections, username);
  if (!user) {
    const error = new Error('Invalid credentials.');
    error.status = 400;
    throw error;
  }

  const matches = await bcrypt.compare(password, user.passwordHash || '');
  if (!matches) {
    const error = new Error('Invalid credentials.');
    error.status = 400;
    throw error;
  }

  return toSessionUser(user);
};

module.exports = {
  toSessionUser,
  signupUser,
  loginUser,
};
