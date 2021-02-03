const express = require("express");
const router = express.Router();

const { makeResponse } = require("../helpers/routeHelper");
const {
  getAllBooks,
  getBookById,
  getBooksByAuthor,
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
  const result = await getBookByTitle(request.query.title);
  makeResponse(response, result);
});

router.get("/:id", async (request, response) => {
  const result = await getBookById(request.params.id);
  makeResponse(response, result);
});

router.get("/:author_id", async (request, response) => {
  const result = await getBooksByAuthor(request.params.author_id);
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
