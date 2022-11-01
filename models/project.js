const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/dashboard', {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', err => {
    console.log(err);
})
db.once('open', () => {
    console.log("Databas connected");
})

const ProjectSchema = new Schema({
    name: String,
    content: String,
    startDate: Date,
    endDate: Date,
    memo: String,
});

const Project = mongoose.model('Project', ProjectSchema);
Project.insertMany({ name: 'test' });
// Project.insertMany();