const express = require("express");
const router = express.Router();

const { makeResponse } = require("../helpers/routeHelper");
const {
  getAllBookshelves,
  getBookshelfById,
  getBookshelvesByUser,
  createBookshelf,
  changeBookshelf,
} = require("../controllers/bookshelves");

router.get("/", async (request, response) => {
  const result = await getAllBookshelves();
  makeResponse(response, result);
});

router.get("/:id", async (request, response) => {
  const result = await getBookshelfById(request.params.id);
  makeResponse(response, result);
});

router.get("/users/:user_id", async (request, response) => {
  const result = await getBookshelvesByUser(request.params.user_id);
  makeResponse(response, result);
});

router.post("/", async (request, response) => {
  const result = await createBookshelf(request.body);
  makeResponse(response, result);
});

router.put("/:id", async (request, response) => {
  const result = await changeBookshelf(request.params.id, request.body);
  makeResponse(response, result);
});

module.exports = router;
