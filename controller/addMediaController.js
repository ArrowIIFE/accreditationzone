

//internal imports 
const User = require("../models/Media");


 async function getAddAllMedia(req, res, next){
    try{
        const users = await User.find()
        res.render("media-user", {
            users:users
        })
    }catch(err){
        next(err)
    }
}

//remove users
async function removeAllMediaUser(req, res, next){
    try{
        const user = await User.findByIdAndDelete({
            _id: req.params.id
        });
        //avatar delete 
        if(user.image){
            unlink(
                path.join(__dirname, `/../public/uploads/mediaAvatars/${user.image}`),
                (err)=>{
                        if(err)console.log(err);
                }
            );
        }
        res.status(200).json({
            message: " Users was remove successfully"
        })
    }catch(err){
        res.status(500).json({
            err: err.message
        })
    }
}

module.exports={
    getAddAllMedia,
    removeAllMediaUser
}