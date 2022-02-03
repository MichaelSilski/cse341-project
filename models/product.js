const fetch = require('node-fetch');

const productUrl = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

module.exports = class Product {
   constructor(tags, imageUrl, price, name, description) {
      this.tags = tags;
      this.imageUrl = imageUrl;
      this.price = price;
      this.name = name;
      this.description = description;
   }

   static fetchAll(cb) {
      fetch(productUrl)
         .then((res) => res.json())
         .then((products) => cb(products))
         .catch((err) => console.log(err));
   }

   static search(query, cb) {
      fetch(productUrl)
         .then((res) => res.json())
         .then((products) => {
            const filteredProducts = products.filter(product => {
               let tagFound = false;
               product.tags.forEach(tag => {
                  if (tag.toLowerCase().includes(query)) 
                     tagFound = true;
               });
               return tagFound ||
                  product.name.toLowerCase().includes(query) ||
                  product.description.toLowerCase().includes(query);
            });
            cb(filteredProducts);
         })
         .catch(err => console.log(err));
   }
};