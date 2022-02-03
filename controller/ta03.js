const Product = require('../models/product.js');

exports.getPage = (req, res, next) => {
   Product.fetchAll((products) => {
      res.render('pages/ta03', {
         title: 'Team Activity 03',
         path: '/ta03', // For pug, EJS
         activeTA03: true, // For HBS
         contentCSS: true, // For HBS
         products: products
       });
   });
};

exports.getSearchProducts = (req, res, next) => {
   const query = req.query.query.toLowerCase();
   Product.search(query, (filteredProducts) => {
      res.render('pages/ta03', {
         title: 'Team Activity 03',
         path: '/ta03',
         products: filteredProducts,
      });
   });
};