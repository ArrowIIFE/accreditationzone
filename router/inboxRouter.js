
//external imports 
const express = require("express");

//internal imports 
const {getInbox}= require("../controller/inboxController")
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");

//router config
const router = express.Router();

//route
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox)

module.exports = router;