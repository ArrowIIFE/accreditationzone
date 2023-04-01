

//internal imports 
const Team = require("../models/Team");
const Countmodel = require("../models/Count");

function getAcro(req, res, next){
    res.render("acro")
}
//add user
async function addTeam(req, res, next){
    Countmodel.findOneAndUpdate(
        {id: "autoval"},
        {"$inc": {"seq":1} },
        {new:true}, (err, cd)=>{
            let seqId
            if(cd==null){
                const newval = new Countmodel({id:"autoval", seq:1})
                newval.save()
                seqId = 1
                
            }else{
                seqId=cd.seq
            }
            let newTeam = new Team({
                // ...req.body,
                id: req.body.id,
                manualnumber: req.body.manualnumber,
                cardname: req.body.cardname,
                formno: req.body.formno,
                fullname: req.body.fullname,
                designation: req.body.designation,
                nidno: req.body.nidno,
                organization: req.body.organization,
                vanue: req.body.vanue,
                zoneone: req.body.zoneone,
                zonetwo: req.body.zonetwo,
                zonethree: req.body.zonethree,
                zonefour: req.body.zonefour,
                zonefive: req.body.zonefive,
                zonesix: req.body.zonesix,
                phone:req.body.phone,
                cardfooter:req.body.cardfooter,
                image: req.file.filename,
                role:req.body.role,
                id: seqId
            })
            newTeam.save();
        }
    )
    try{
        res.status(200).json({
            message: " Your post was added successfully"
        }, 
        res.redirect("/acro"))
        
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }

}
module.exports = {
    getAcro,
    addTeam
}