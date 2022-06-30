const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');
const controller = require('./server/controller/controller');

// Connect to MongoDB
dotenv.config({ path: 'config.env' });
connectDB();

// Parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}));

// Setting View Engine
const publicDirectory = path.join(__dirname, 'views');
app.use(express.static(publicDirectory));
app.set("view engine", 'html');


// Loading assets
app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/api/users', controller.find);
app.post('/api/users', controller.create);
app.put('/api/users/:id', controller.update);
app.delete('/api/users/:id', controller.delete);

app.listen(3000, ()=> {console.log('listening on port 3000')});