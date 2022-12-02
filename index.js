// import required essentials
const http = require('http');
const express = require('express');
var cors = require('cors');
// import `items` from `routes` folder 
const itemsRouter = require('./routes/response');

// create new app
const app = express();
app.use(express.json());

//Resolve cors issue.
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/api', itemsRouter);

// default URL to API
app.use('/', function(req, res) {
    res.send('node-ex-api works :-)');
});

const server = http.createServer(app);
const port = 8080;
server.listen(port);
console.debug('Server listening on port ' + port);