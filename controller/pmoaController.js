

//internal imports 
const Team = require("../models/Pmoa");
const Countmodel = require("../models/Count");

function getPmoa(req, res, next){
    res.render("pmoa")
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
                formno: req.body.formno,
                fullname: req.body.fullname,
                designation: req.body.designation,
                organization: req.body.organization,
                zoneone: req.body.zoneone,
                zonetwo: req.body.zonetwo,
                zonethree: req.body.zonethree,
                zonefour: req.body.zonefour,
                zonefive: req.body.zonefive,
                zonesix: req.body.zonesix,
                pmoa: req.body.pmoa,
                image: req.file.filename,
                role:req.body.role,
                id: seqId
            })
            newTeam.save();
        }
    )
    try{
        res.status(200).json({
            message: "Your post was added successfully"
        }, 
        res.redirect("/pmoa"))
        
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }

}
module.exports = {
    getPmoa,
    addTeam
}