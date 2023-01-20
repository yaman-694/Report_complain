const Report = require("../model/input");

const search = (req, res) => {
  const input = req.body;
  console.log(req.body);
  Report.find(
    { ave_name: { $regex: input.ave_name, $options: "i" } },
    (err, data) => {
      if (err) {
        console.log(err);
        res.json({ error: "No data found" });
      } else {
        console.log(data);
        res.json(data);
      }
    }
  );
};

module.exports = search;
