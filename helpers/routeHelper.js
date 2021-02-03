const makeResponse = async (response, result) => {
  if (result.error) {
    handleError(response, result.error);
  } else {
    ok(response, result.json);
  }
};

const handleError = (response, error, message = "error") => {
  console.log(error);
  response.status(500).send(message);
};

const ok = (response, json) => {
  response.status(200).json(json);
};

exports.makeResponse = makeResponse;
