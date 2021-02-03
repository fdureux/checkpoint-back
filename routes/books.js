const express = require("express");
const router = express.Router();

const { makeResponse } = require("../util/routeHelper");
const {
  getAllBooks,
  getBookById,
  getBookByAuthor,
  getBookByTitle,
  createBook,
  changeBook,
  deleteBook,
} = require("../controllers/books");

router.get("/", async (request, response) => {
  const result = await getAllBooks();
  makeResponse(response, result);
});

router.get("/search", async (request, response) => {
  const result = await getBookByTitle(request.query.genre);
  makeResponse(response, result);
});

router.get("/:id", async (request, response) => {
  const result = await getBookById(request.params.id);
  makeResponse(response, result);
});

router.post("/", async (request, response) => {
  const result = await createBook(request.body);
  makeResponse(response, result);
});

router.put("/:id", async (request, response) => {
  const result = await changeBook(request.params.id, request.body);
  makeResponse(response, result);
});

router.delete("/:id", async (request, response) => {
  const result = await deleteBook(request.params.id);
  makeResponse(response, result);
});

module.exports = router;
