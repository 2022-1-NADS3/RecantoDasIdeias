var express = require("express");
const cors = require('cors');
const { Pool } = require('pg');
const { json } = require('express/lib/response');
require('dotenv').config();
var app = express();
var port = process.env.port || 3000;
var hostname = "localhost";
 
const pool = new Pool({
   connectionString: process.env.HEROKU_POSTGRESQL_URL,
   ssl: {
       rejectUnauthorized: false
   }
});
 
const app = express();
 
app.use(express.json());
app.use(cors());
 


 
 
 app.post('/login', async (req, res) => {
  
     const { useremail, userpassword } = req.body
 
     let user = ''
     try {
         user = await pool.query('SELECT * FROM user_login WHERE user_email = ($1)', [useremail])
         if(!user.rows[0]){
             user = await pool.query("INSERT INTO user_login(user_email, user_password) VALUES($1, $2) RETURNING *", [useremail, userpassword])
         }
         return res.status(200).send(user.rows)
     }catch(err){
         return res.status(400).send(err)
     }
   
 });

app.listen(port, hostname, () => {
    console.log("servidor https://"+ hostname + ":" + port);
});