const Report = require("../model/input");

const input = (req, res) => {
  const input = req.body;
  // console.log(input);

  const report = new Report({
    ave_name: input.ave_name,
    ave_adderess: input.ave_adderess,
    ana_name: input.ana_name,
    ana_address: input.ana_address,
    complain_in_summary: input.complain_in_summary,
    where: input.where,
    complain_accept_no: input.complain_accept_no,
    complain_accept_date: input.complain_accept_date,
    complain_panjikaran_no: input.complain_panjikaran_no,
    complain_panjikaran_date: input.complain_panjikaran_date,
    where_it_sent: input.where_it_sent,
    avyshak_karwai: input.avyshak_karwai,
    prativedan_no: input.prativedan_no,
    partivedan_date: input.partivedan_date,
    partivedan_result: input.partivedan_result,
    remark: input.remark,
    dpodate: input.dpodate,
    dpoNumber: input.dponumber,
  });
  report.save()
  .then((user) => {
    // console.log("se", user);
    // res.json({error:"No data"});
    res.json({ input });
  })
  .catch((err) => {
    res.json({error:"Input data is not valid",errors:err.errors});
    });
};

const get_all = (req,res)=>{
    Report.find((err,data)=>{
        if(err){
            console.log(err);
            res.json({error:"No data found"});
        }
        else{
            res.json(data);
        }
    });
}

const delete_complain = (req,res)=>{
    const complain_accept_no = req.params.complain_accept_no;
    Report.findOneAndDelete({complain_accept_no:complain_accept_no},(err,data)=>{
        if(err){
            console.log(err);
            res.json({error:"No data found"});
        }
        else{
            res.json(data);
        }
    });
}

module.exports = {
  input,
  get_all,
  delete_complain
};