const Report = require("../model/input");
const mongoXlsx = require("mongo-xlsx");
// const xlsx = require('xlsx');

// const download = (req,res)=>{
//     var wb = xlsx.utils.book_new();
//     Report.find((err,data)=>{
//         if(err){
//             console.log(err);
//             res.json({error:"No file found"});
//         }
//         else{
//             var temp = JSON.stringify(data);
//             temp = JSON.parse(temp);

//             for(var i = 0;i<temp.length;i++)
//             {
//             temp[i]._id=i+1;
//             delete temp[i].__v;
//         }
//             console.log(temp)
//             var ws = xlsx.utils.json_to_sheet(temp);
//             var down = __dirname + '/../public/export.xlsx'
//             xlsx.utils.book_append_sheet(wb,ws,"Sheet1");
//             // console.log(ws);
//             xlsx.writeFile(wb,down);
//             res.download(down);
//         }
//     })

// }

// module.exports = download;
const download = (req, res) => {
  Report.find({}, (err, data) => {
    if (err) throw err;
    console.log(data);
    // Define the structure of the Excel sheet
    const model = mongoXlsx.buildDynamicModel(data);

    // Convert MongoDB data to an Excel sheet
    mongoXlsx.mongoData2Xlsx(data, model, (err, excelData) => {
      if (err) throw err;

      // Send the Excel data as a response

      console.log(excelData);
      res.send(excelData);
    });
  });
};
module.exports = download;
