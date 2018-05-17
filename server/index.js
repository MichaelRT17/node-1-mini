const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const booksCtrl = require('./controllers/books_controller');

let app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../build'));

app.get('/api/books', booksCtrl.read);
app.post('/api/books', booksCtrl.create);
app.put('/api/books/:id', booksCtrl.update);
app.delete('/api/books/:id', booksCtrl.delete);

app.listen(port, ()=>{
    console.log('listening in on port: ' + port)
})