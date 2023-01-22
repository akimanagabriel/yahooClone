const { user, marks, address } = require("../details");

module.exports.allUser = (req, res) => {
  res.send(user);
};

module.exports.marksDetails = function (req, res) {
  res.json(marks);
};

module.exports.addressOut = function (req, res) {
  res.send(address);
};
