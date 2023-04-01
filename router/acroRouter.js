//external imports 
const express = require("express");

//internal imports 
const {getAcro, addTeam}= require("../controller/acroController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const upload = require("../middlewares/acro/upload")

//router config
const router = express.Router();

//get route
router.get("/", decorateHtmlResponse("Acro"), checkLogin, getAcro)

//post route
router.post("/", upload.single("image"), addTeam)

module.exports = router;