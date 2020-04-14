const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => res.render('index'));

app.listen(config.port, () => console.log(`Listening at port ${config.port}`));