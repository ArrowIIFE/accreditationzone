//external imports 
const express = require("express");

//internal imports 
const {getAddUser, removeAllUser}= require("../controller/adduserController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/", decorateHtmlResponse("Add-User"),checkLogin, getAddUser);
router.delete("/:id", removeAllUser);


module.exports = router;