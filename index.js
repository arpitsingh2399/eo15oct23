const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
host :"sql12.freesqldatabase.com",
user :"sql12651861",
password :"WGjaWRsVTl",
database : "sql12651861"
});

app.post("/save" , (req,res) => {

let data = [ req.body.name , req.body.feedback ] ;
let sql = "insert into feedback values(?,?)";

con.query(sql,data, (err,result) => {
if(err) return res.send(err);
else return res.send(result);



})




})


app.listen(9000 , () => { console.log("ready to serve @9000");} );