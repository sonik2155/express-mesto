const jwt = require('jsonwebtoken');
const UnauthError = require("../errors/UnauthError");

const { NODE_ENV, JWT_SECRET } = process.env;

const extractBearerToken = (header) => header.replace("Bearer ", "");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthError("Необходимо авторизироваться"))
  }

  const token = extractBearerToken(authorization);
  let payload;
  
  try {
    // попытаемся верифицировать токен
    payload = jwt.verify(token, `${NODE_ENV === "production" ? JWT_SECRET : "dev-secret"}`);
  } catch (err) {
    // отправим ошибку, если не получилось
    next(new UnauthError("Необходимо авторизироваться"))
  }
  req.user = payload;

  next();
}; 