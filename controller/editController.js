//internal imports 
const User = require("../models/Team");

const getEdit = async (req, res, next)=>{
try{
    const result = await User.findById(req.params.id)
    res.render("edit", {data:result});
}catch(err){
    res.status(500).json({
        err: err.message
    })
}

}

module.exports= getEdit