const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

const productsJSON = path.resolve('./products.json');

app.get('/', (req, res) => {
  fs.readFile(productsJSON, 'utf8', (err, data) => {
    if (err) throw err;
    const products = JSON.parse(data);
    res.render('products', {title: 'Test', message: 'Products', products: products});
  })
});

app.listen(3000, () => console.log('example app listening on port 3000'));
