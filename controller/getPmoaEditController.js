//internal imports 
const User = require("../models/Pmoa");

const getPmoaEdit = async (req, res, next)=>{
try{
    const result = await User.findById(req.params.id)
    res.render("pmoa-edit", {data:result});
}catch(err){
    res.status(500).json({
        err: err.message
    })
}

}

module.exports= getPmoaEdit;