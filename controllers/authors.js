const pool = require("../config");

const getAllAuthors = async () => {
  try {
    return {
      json: (await pool.query("SELECT firstname, lastname FROM author"))[0],
    };
  } catch (error) {
    return { error };
  }
};
const getAuthorById = async (id) => {
  try {
    return {
      json: (await pool.query("SELECT * FROM author WHERE id = ?", id))[0],
    };
  } catch (error) {
    return { error };
  }
};

const createAuthor = async (body) => {
  try {
    return {
      json: (await pool.query("INSERT INTO author SET ?", body))[0],
    };
  } catch (error) {
    return { error };
  }
};

const changeAuthor = async (id, body) => {
  try {
    return {
      json: (
        await pool.query("UPDATE author SET ? WHERE id = ? ", [body, id])
      )[0],
    };
  } catch (error) {
    return { error };
  }
};

exports.getAllAuthors = getAllAuthors;
exports.getAuthorById = getAuthorById;
exports.createAuthor = createAuthor;
exports.changeAuthor = changeAuthor;
