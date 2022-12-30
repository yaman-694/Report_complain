const Report = require("../model/input");

const search = (req,res)=>{
    const input = req.body;
    console.log(req.body);
    Report.find({ana_name:input.ana_nam},(err,data)=>{
        if(err){
            console.log(err);
            res.json({error:"No data found"});
        }
        else{
            res.json(data);
        }
    })
};

module.exports = search;