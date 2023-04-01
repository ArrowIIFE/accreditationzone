//internal imports 
const User = require("../models/Team");

const getSinglePrint = async (req, res, next)=>{
try{
    const result = await User.findById(req.params.id)
    res.render("singleselectprint", {data:result});
}catch(err){
    res.status(500).json({
        err: err.message
    })
}

}

module.exports= getSinglePrint