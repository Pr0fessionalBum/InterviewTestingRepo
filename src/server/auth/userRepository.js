/**
 * User repository.
 * Inputs: Mongo collections plus user identifiers, usernames, and update payloads.
 * Outputs: User records for authentication and profile flows.
 */
const { buildUser } = require('../data/persistence');
const { toObjectId } = require('../resumes/resumeRepository');

const normalizeUsername = (username) => username?.trim().toLowerCase();

const findUserByUsername = async (collections, username) => {
  if (!collections?.users) {
    return null;
  }

  return collections.users.findOne({ username: normalizeUsername(username) });
};

const findUserById = async (collections, userId) => {
  if (!collections?.users) {
    return null;
  }

  const normalizedUserId = toObjectId(userId);
  if (!normalizedUserId) {
    return null;
  }

  return collections.users.findOne({ _id: normalizedUserId });
};

const createUser = async (collections, { username, name, passwordHash }) => {
  if (!collections?.users) {
    throw new Error('User store unavailable.');
  }

  const userDoc = buildUser({
    username: normalizeUsername(username),
    name: name || username,
    passwordHash,
  });

  const { insertedId } = await collections.users.insertOne(userDoc);
  return {
    ...userDoc,
    _id: insertedId,
  };
};

const updateUserById = async (collections, userId, updates) => {
  if (!collections?.users) {
    throw new Error('User store unavailable.');
  }

  const normalizedUserId = toObjectId(userId);
  if (!normalizedUserId) {
    throw new Error('Invalid user id.');
  }

  await collections.users.updateOne({ _id: normalizedUserId }, { $set: updates });
  return findUserById(collections, normalizedUserId);
};

module.exports = {
  normalizeUsername,
  findUserByUsername,
  findUserById,
  createUser,
  updateUserById,
};
