const express = require("express");
const router = express.Router();

const booksRoutes = require("./books");
const authorsRoutes = require("./authors");
const bookshelvesRoutes = require("./bookshelves");
const usersRoutes = require("./users");

router.use("/books", booksRoutes);
router.use("/bookshelves", bookshelvesRoutes);
router.use("/authors", authorsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
