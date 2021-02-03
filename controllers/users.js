const pool = require("../config");

const getAllUsers = async () => {
  try {
    return {
      json: (await pool.query("SELECT * FROM user"))[0],
    };
  } catch (error) {
    return { error };
  }
};
const getUserById = async (id) => {
  try {
    return {
      json: (await pool.query("SELECT * FROM user WHERE id = ?", id))[0],
    };
  } catch (error) {
    return { error };
  }
};

const createUser = async (body) => {
  try {
    return {
      json: (await pool.query("INSERT INTO user SET ?", body))[0],
    };
  } catch (error) {
    return { error };
  }
};

const changeUser = async (id, body) => {
  try {
    return {
      json: (
        await pool.query("UPDATE user SET ? WHERE id = ? ", [body, id])
      )[0],
    };
  } catch (error) {
    return { error };
  }
};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.changeUser = changeUser;
