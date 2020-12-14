const User = require("../models/user")

module.exports.getUsers = (res, req) => {
  User.find({})
.then((users) => res.status(200).send(users))
.catch((err) => res.status(500).send(err))
};

module.exports.getProfileUser = (res, req) => {
  const { id } = req.params;
  User.findById({ id })
  .then(users => users.find(user => user.id === req.params.id))
  .then((user) => {
    if (!user) {
      return res.status(404).send({ message: "Нет пользователя с таким id" });
    }
    return res.status(200).send(user);
  })
  .catch((err) => res.status(500).send(err));
};

module.exports.createUser = (res, req) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Ошибка валидации' });
      }
      return res.status(500).send({ message: 'Ошибка сервера' });
    });
};

