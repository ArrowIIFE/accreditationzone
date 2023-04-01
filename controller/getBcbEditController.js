//internal imports 
const User = require("../models/Bcboffice");

const getBcbEdit = async (req, res, next)=>{
try{
    const result = await User.findById(req.params.id)
    res.render("bcb-edit", {data:result});
}catch(err){
    res.status(500).json({
        err: err.message
    })
}

}

module.exports= getBcbEdit;