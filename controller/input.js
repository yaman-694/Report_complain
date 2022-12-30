const Report = require("../model/input");

const input = (req, res) => {
  const input = req.body;
  console.log(input.ana_name_and_addres);

  const report = new Report({ 
    ave_name_and_address: input.ave_name_and_addres,
    ana_name_and_address: input.ana_name_and_addres,
    complain_in_summary: input.complain_in_summar,
    where: input.wher,
    complain_accept_no: input.complain_accept_n,
    complain_accept_date: input.complain_accept_dat,
    complain_panjikaran_no: input.complain_panjikaran_n,
    complain_panjikaran_date:input.complain_panjikaran_dat,
    where_it_sent: input.where_it_sen,
    avyshak_karwai: input.avyshak_karwa,
    prativedan_no: input.prativedan_n,
    partivedan_date: input.partivedan_dat,
    partivedan_result: input.partivedan_resul,
    remark: input.remar
 });
  report.save()
  .then((user) => {
    console.log("se", user);
  });
  res.json({ input });
};

const get_all = (req,res)=>{
    Report.find((err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });
}


module.exports = {
  input,
  get_all
};
