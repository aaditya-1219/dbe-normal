const express = require('express')
const hostname = '0.0.0.0'
const port = 8000

const app = express()

app.use(express.json())

app.use(express.urlencoded())

app.use(express.static(__dirname + "/"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
})

var mysql = require('mysql');

var con = mysql.createConnection({
  host: hostname,
  user: "root",
  password: "sql123",
  database: "db"
});

app.post('/formPost', (req, res) => {;
    const course = req.body.course
    const fee = req.body.fee
    const branch = req.body.branch
    const teacherId = req.body.teacherId
    const teacherName = req.body.teacherName
    console.log(req.body);
    // CREATE NEW QUERY BASED ON BELOW QUERY 

    con.connect(function(err) {
        if (err) throw err;
        // Inserting data into referenced table
        con.query(`INSERT INTO TEACHER (Teacher_ID, Teacher_name) VALUES (${teacherId}, "${teacherName}");`, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });

        // Inserting data into referencing table
        con.query(`INSERT INTO COURSE (Course_name, Fees, Branch, Teacher_ID) VALUES ("${course}", ${fee}, "${branch}", ${teacherId});`, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
    res.sendFile(__dirname + '/thanks.html')
})
