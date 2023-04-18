"use strict";
const User = require("../models/libr.model");
exports.findAll = function (req, res) {
  User.findAll = (err, user) => {
    console.log("controller");
    if (err) {
      res.send(err);
      console.log("res", user);
    }
    res.send(user);
  };
};
//const use = (user) =>
exports.create = function (req, res) {
  const new_user = (req) => {
    this.book_name = req.body.book_name;
    this.author_name = req.body.author_name;
    this.Year_published = req.body.Year_published;
    this.Price = req.body.Price;
    this.discount = req.body.discount;
    this.number_of_pages = req.body.number_of_pages;
    this.condition = req.body.condition;
  };
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    User.create(new_user, function (err, user) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "data updated successfully",
        data: user,
      });
    });
  }
};
exports.findById = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .second({ error: true, message: "Please prvide all required field" });
  } else {
    User.update(req.params.id, new User(req.body), function (err, user) {
      if (err) res.send(err);
      res.json({ error: false, message: "data updated successfully" });
    });
  }
};

exports.delete = function (req, res) {
  User.delete(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json({ error: false, message: "data deleted successfully" });
  });
};
