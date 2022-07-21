const http = require('http');
const express = require('express');
var cors = require('cors'); 
const itemsRouter = require('./routes/items');


const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:8100'}));

/* this '/items' URL will have two end-points:
→ localhost:3000/items/ (this returns array of objects)
→ localhost:3000/items/:id (this returns single object)
*/
app.use('/items', itemsRouter);

app.use('/', function(req, res) {
    res.send('node-ex-api works :-)');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
// npm install
// npm start
// routes folder 
// inside routes folder items.js
 //npm install cors
