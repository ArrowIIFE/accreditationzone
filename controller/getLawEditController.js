//internal imports 
const User = require("../models/Law");

const getlawEdit = async (req, res, next)=>{
try{
    const result = await User.findById(req.params.id)
    res.render("law-edit", {data:result});
}catch(err){
    res.status(500).json({
        err: err.message
    })
}

}

module.exports= getlawEdit;