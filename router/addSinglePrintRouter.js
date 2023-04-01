//external imports
const express = require("express");
const getSinglePrint = require("../controller/singlePrintController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router = express.Router();


router.get("/single-print/:id", decorateHtmlResponse("print"), checkLogin, getSinglePrint);

module.exports = router;