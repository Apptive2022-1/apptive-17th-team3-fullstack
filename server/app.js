const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/dashboard', {
//     useNewUrlParser: true
// });

// const db = mongoose.connection;
// db.on('error', err => {
//     console.log(err);
// })
// db.once('open', () => {
//     console.log("Databas connected");
// })


const app = express();
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.post('/form', (req, res) => {
    console.log('form submitted');
    // console.log(req.body);
    console.log(req.body);
    // console.log(res);
    // console.log(res.body);
    res.redirect('http://localhost:3000')
})

app.get('/inform', (req, res) => {
    console.log('get inform');
    // data = new Object();
    // data.name = "test"
    data = [{"id": 0, "name": 'first project', "completion": 70}, {"id": 1, "name": 'second project', "completion": 50}, {"id": 2, "name": 'third project', "completion": 30}]
    let jsonData = JSON.stringify(data);
    res.send(jsonData);
})

app.listen(8080, ()=>{
    console.log(`PORT 8080`);
})

