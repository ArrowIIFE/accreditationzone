//external imports 
const express = require("express");

//internal imports 
const {getAddPrint}= require("../controller/printController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/print/:page", decorateHtmlResponse("print"), checkLogin, getAddPrint);

module.exports = router;