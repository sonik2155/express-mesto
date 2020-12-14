const express = require("express");

const { PORT = 3000 } = process.env;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const path = require("path");

const cardsRouter = require("./routes/cards");
const usersRouter = require("./routes/users");

app.use("/", usersRouter);
app.use("/", cardsRouter);

app.use(express.static(path.join(__dirname, "public")));

app.use("*", (req, res) => {
  res.status(404).send({ message: "Запрашиваемый ресурс не найден"});
});

app.use((req, res, next) => {
  req.user = {
    _id: '5fb7d9f994d7832efcd46d5f'
  };

  next();
});

mongoose.connect("mongodb://localhost:27017/mestodb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
})


