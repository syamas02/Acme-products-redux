const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const db = require('./db');
const { Products } = db.models;

app.use(require('body-parser').json());
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

db.syncAndSeed();
app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});

app.get('/api/products', (req, res, next) => {
  Products.findAll()
    .then(products => res.send(products))
    .catch(next);
});

app.post('/api/products', (req, res, next) => {
  Products.create(req.body)
    .then(product => res.send(product))
    .catch(next);
});

app.delete('/api/products/:id', (req, res, next) => {
  Products.findById(req.params.id)
    .then(product => {
      product.destroy();
      res.sendStatus(204);
    })
    .catch(next);
});
app.get('/api/products/toprating', (req, res, next) => {
  Products.max('rating')
    .then(rating => Products.findOne({ where: { rating } }))
    .then(product => res.send(product))
    .catch(next);
});
