const pool = require("../config");

const getAllBooks = async () => {
  try {
    return { json: (await pool.query("SELECT * FROM book"))[0] };
  } catch (error) {
    return { error };
  }
};

const getBookById = async (id) => {
  try {
    return {
      json: (await pool.query("SELECT * FROM book WHERE id = ?", id))[0],
    };
  } catch (error) {
    return { error };
  }
};

const getBooksByAuthor = async (author_id) => {
  try {
    return {
      json: (
        await pool.query("SELECT * FROM book WHERE author_id = ?", author_id)
      )[0],
    };
  } catch (error) {
    return { error };
  }
};

const getBookByGenre = async (title) => {
  try {
    return {
      json: (
        await pool.query("SELECT * FROM book WHERE title LIKE ?", [title])
      )[0],
    };
  } catch (error) {
    return { error };
  }
};

const createBook = async (body) => {
  try {
    return {
      json: (await pool.query("INSERT INTO book SET ?", body))[0],
    };
  } catch (error) {
    return { error };
  }
};

const changeBook = async (id, body) => {
  try {
    return {
      json: (
        await pool.query("UPDATE book SET ? WHERE id = ? ", [body, id])
      )[0],
    };
  } catch (error) {
    return { error };
  }
};

const deleteBook = async (id) => {
  try {
    return {
      json: (await pool.query("DELETE FROM book WHERE id = ?", id))[0],
    };
  } catch (error) {
    return { error };
  }
};

exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.getBooksByAuthor = getBooksByAuthor;
exports.createBook = createBook;
exports.changeBook = changeBook;
exports.deleteBook = deleteBook;
exports.getBookByGenre = getBookByGenre;
