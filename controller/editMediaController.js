//internal imports 
const User = require("../models/Media");

const getMediaEdit = async (req, res, next)=>{
try{
    const result = await User.findById(req.params.id)
    res.render("media-edit", {data:result});
}catch(err){
    res.status(500).json({
        err: err.message
    })
}

}

module.exports= getMediaEdit