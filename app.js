const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");
require("dotenv").config();

const { errors, celebrate, Joi, CelebrateError } = require("celebrate");
const validator = require("validator");

const cardsRouter = require("./routes/cards");
const usersRouter = require("./routes/users");
const { login, createUser } = require("./controllers/users.js");
const auth = require("./middlewares/auth.js");
const NotFoundError = require("./errors/NotFoundError");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const { PORT = 3000 } = process.env;
const app = express();

const validateUserLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validateUserSignup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().custom((url) => {
      if (!validator.isURL(url)) {
        throw new CelebrateError("Неверный URL");
      }
      return url;
    }),
  }),
});

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Сервер сейчас упадёт");
  }, 0);
});

app.post("/signin", validateUserLogin, login);
app.post("/signup", validateUserSignup, createUser);
app.use(auth);

app.use("/cards", cardsRouter);
app.use("/users", usersRouter);
app.use("/*", (req, res) => {
  throw new NotFoundError("Запрашиваемый ресурс не найден");
});

app.use(errorLogger);
app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? "На сервере произошла ошибка" : message,
  });
});

mongoose.connect("mongodb://localhost:27017/mestodb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});