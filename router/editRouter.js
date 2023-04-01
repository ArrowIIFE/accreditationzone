//external imports
const express = require("express");
const getEdit = require("../controller/editController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router = express.Router();


router.get("/edit/:id", decorateHtmlResponse("edit"), checkLogin, getEdit);

module.exports = router;