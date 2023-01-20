const Report = require("../model/input");

const search = (req,res)=>{
    // const value = req.params.value;
    // console.log(value);
    const input  = req.body;
    console.log(input);
    Report.find(input,(err,data)=>{
        if(err){
            console.log(err);
            res.json({error:"No data found"});
        }
        else{
            console.log(data);
            res.json(data);
        }
    })
};

module.exports = search;