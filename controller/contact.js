const db = require("../database/dbConnect");

const createContactUs = (req, res) => {
  console.log(req.body)
  let sql = `INSERT INTO ContactUs(FirstName, LastName, Email, Password, Gender, College) VALUES(?,?,?,?,?,?)`;
  db.run(
    sql,
    [req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.gender, req.body.college],
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
