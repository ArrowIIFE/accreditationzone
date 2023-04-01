//external imports
const express = require("express");
const getUpdate = require("../controller/updateController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router = express.Router();


router.post("/update/:id", decorateHtmlResponse("update"),checkLogin, getUpdate);

module.exports = router;