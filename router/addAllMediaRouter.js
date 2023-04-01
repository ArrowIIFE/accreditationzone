//external imports 
const express = require("express");

//internal imports 
const {getAddAllMedia, removeAllMediaUser}= require("../controller/addMediaController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/", decorateHtmlResponse("Add-Media"),checkLogin, getAddAllMedia);
router.delete("/:id", removeAllMediaUser);



module.exports = router;