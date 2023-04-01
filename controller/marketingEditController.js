//internal imports 
const User = require("../models/Marketing");

const getMarketingEdit = async (req, res, next)=>{
try{
    const result = await User.findById(req.params.id)
    res.render("marketing-edit", {data:result});
}catch(err){
    res.status(500).json({
        err: err.message
    })
}

}

module.exports= getMarketingEdit;