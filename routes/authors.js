const express = require("express");
const router = express.Router();

const { makeResponse } = require("../helpers/routeHelper");
const {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  changeAuthor,
} = require("../controllers/authors");

router.get("/", async (request, response) => {
  const result = await getAllAuthors();
  makeResponse(response, result);
});

router.get("/:id", async (request, response) => {
  const result = await getAuthorById(request.params.id);
  makeResponse(response, result);
});

router.post("/", async (request, response) => {
  const result = await createAuthor(request.body);
  makeResponse(response, result);
});

router.put("/:id", async (request, response) => {
  const result = await changeAuthor(request.params.id, request.body);
  makeResponse(response, result);
});

module.exports = router;
