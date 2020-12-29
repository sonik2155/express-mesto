const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { PORT = 3000 } = process.env;
const app = express();

const cardsRouter = require("./routes/cards");
const usersRouter = require("./routes/users");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: "5feb3fa70773051a80f91a09",
  };
  next();
});

app.use("/cards", cardsRouter);
app.use("/users", usersRouter);
app.use("/*", (req, res) => {
  res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
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
