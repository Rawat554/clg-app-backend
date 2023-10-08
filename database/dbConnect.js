const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/ClgAppDb.db", sqlite3.OPEN_READWRITE, (err)=>{
    if(err){
        return console.error(err.message);
    }
    else{
        console.info("Connected to database");
    }
})

module.exports = db;