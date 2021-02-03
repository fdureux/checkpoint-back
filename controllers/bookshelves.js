const pool = require("../config");

const getAllBookshelves = async () => {
  try {
    return {
      json: (await pool.query("SELECT * FROM bookshelf"))[0],
    };
  } catch (error) {
    return { error };
  }
};
const getBookshelfById = async (id) => {
  try {
    return {
      json: (await pool.query("SELECT * FROM bookshelf WHERE id = ?", id))[0],
    };
  } catch (error) {
    return { error };
  }
};

const createBookshelf = async (body) => {
  try {
    return {
      json: (await pool.query("INSERT INTO bookshelf SET ?", body))[0],
    };
  } catch (error) {
    return { error };
  }
};

const changeBookshelf = async (id, body) => {
  try {
    return {
      json: (
        await pool.query("UPDATE bookshelf SET ? WHERE id = ?", [body, id])
      )[0],
    };
  } catch (error) {
    return { error };
  }
};

const getBookshelvesByUser = async (user_id) => {
  try {
    return {
      json: (
        await pool.query(
          "SELECT bs.user_id, bs.favorite, bs.status, bs.date_read, b.title FROM bookshelf as bs JOIN book as b ON bs.book_id = b.id WHERE user_id = ?",
          user_id
        )
      )[0],
    };
  } catch (error) {
    return { error };
  }
};

exports.getAllBookshelves = getAllBookshelves;
exports.getBookshelfById = getBookshelfById;
exports.getBookshelvesByUser = getBookshelvesByUser;
exports.createBookshelf = createBookshelf;
exports.changeBookshelf = changeBookshelf;
