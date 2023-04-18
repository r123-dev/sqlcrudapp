const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/usercontrollers");
router.get("/", usercontroller.findAll);

router.post("/", usercontroller.create);

router.get("/:id", usercontroller.findById);

router.put("/:id", usercontroller.update);
router.delete("/:id", usercontroller.delete);

module.exports = router;
