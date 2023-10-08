const db = require("../database/dbConnect");

const createContactUs = (req, res) => {
  let sql = `INSERT INTO ContactUs(NAME, PHONE_NUMBER, EMAIL, DESCRIPTION) VALUES(?,?,?,?)`;
  db.run(
    sql,
    [req.body.name, req.body.phone_no, req.body.email, req.body.desc],
    (err) => {
      if (err) {
        if(err){
            res.status(500).json({"Error":err, "Message":err.message})
        }
      }
      else{
        res.status(200).json({"Message":'data submitted successfully...'})
      }
    }
  );
};

const getContactUs = (req, res) => {
  let sql = `SELECT * FROM ContactUs`;
  db.all(sql, [], (err, rows) => {
    if(err){
        res.status(500).json({"Error":err, "Message":err.message})
    }
    if (rows) {
        return res.json(rows);
    }
    db.close();
  });
};

module.exports = { createContactUs, getContactUs };
