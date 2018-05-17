let books = [];
let id = 0;

module.exports = {
    read:function(req, res){
        res.status(200).send(books);
    },
    create:function(req, res){
        let newBook = {
            title:req.body.title,
            author:req.body.author,
            id:id
        }
        books.push(newBook);
        id++;
        res.status(200).send(books);
    },
    update:function(req, res){
        const {title, author} = req.body;
        const idLookup = req.params.id;
        const indexOfBook = books.findIndex(book => book.id == idLookup);
        let book = books[indexOfBook];

        books[indexOfBook] = {
            title:title || book.title,
            author:author || book.author,
            id:book.id
        }
        res.status(200).send(books);
    },
    delete:function(req, res){
        const idLookup = req.params.id;
        const indexOfBook = books.findIndex(book => book.id == idLookup);

        books.splice(indexOfBook, 1);
        res.status(200).send(books);
    }
}