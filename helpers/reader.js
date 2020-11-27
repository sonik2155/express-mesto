const fs = require("fs").promises;

const readFile = (pathToFile) => {
  return fs.readFile(pathToFile, { encoding: "utf-8" })
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err));
};

module.exports = readFile;
