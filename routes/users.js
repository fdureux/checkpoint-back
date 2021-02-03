const express = require("express");
const router = express.Router();

const { makeResponse } = require("../helpers/routeHelper");
const {
  getAllUsers,
  getUserById,
  createUser,
  changeUser,
} = require("../controllers/users");

router.get("/", async (request, response) => {
  const result = await getAllUsers();
  makeResponse(response, result);
});

router.get("/:id", async (request, response) => {
  const result = await getUserById(request.params.id);
  makeResponse(response, result);
});

router.post("/", async (request, response) => {
  const result = await createUser(request.body);
  makeResponse(response, result);
});

router.put("/:id", async (request, response) => {
  const result = await changeUser(request.params.id, request.body);
  makeResponse(response, result);
});

module.exports = router;
