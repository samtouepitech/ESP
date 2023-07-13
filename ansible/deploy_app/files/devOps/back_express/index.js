const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send('welcome to api voltron');
});


app.listen(4000, ()=> console.log("app start on port 4000"));