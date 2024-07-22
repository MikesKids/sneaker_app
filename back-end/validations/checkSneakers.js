const checkBrand = (request, response, next) => {
  if (request.body.brand) {
    return next();
  } else {
    response.status(400).json({ error: "Brand is required" });
  }
};

const checkModel = (request, response, next) => {
  if (request.body.model) {
    return next();
  } else {
    response.status(400).json({ error: "Model is required" });
  }
};

const checkBoolean = (request, response, next) => {
  if (
    typeof request.body.is_favorite === "boolean" ||
    request.body.is_favorite === "true" ||
    request.body.is_favorite === "false"
  ) {
    return next();
  } else {
    response.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

module.exports = { checkBrand, checkModel, checkBoolean };
