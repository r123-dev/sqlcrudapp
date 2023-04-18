"use strict";
var dbConn = require("./../../config/connection");
const User = (user) => {
  this.book_name = user.book_name;
  this.author_name = user.author_name;
  this.Year_published = user.Year_published;
  this.Price = user.Price;
  this.discount = user.discount;
  this.number_of_pages = user.number_of_pages;
  this.condition = user.condition;
};

User.create = function (newUser, result) {
  dbConn.query("INSERT INTO comic set ?", newUser, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("res.insertId");
      result(null, res.insertId);
    }
  });
};

User.findById = function (id, result) {
  dbConn.query("SELECT * from comic where id=?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
User.findAll = (result) => {
  dbConn.query("SELECT * from comic", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("result: ", res);
      result(null, res);
    }
  });
};

User.update = function (id, user, result) {
  dbConn.query(
    "UPDATE comic SET book_name=?,author_name=?,Year_published=?,Price=?,discount=?,number_of_pages=?,condition=?",
    [
      user.book_name,
      user.author_name,
      user.Year_published,
      user.Price,
      user.discount,
      user.number_of_pages,
      user.condition,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

User.delete = function (id, result) {
  dbConn.query("DELETE FROM users WHERE id=?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.experts = User;
