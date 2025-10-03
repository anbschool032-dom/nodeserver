const { log } = require('console');
const fs = require('fs');
const path = require('path');
const products = [];
 const p = path.join(path.dirname(process.mainModule.filename),
         'data',
         'products.json'
        );
const getProductFromFile = (callback) =>{
         fs.readFile(p,(err, fileContent)=>{
            if (err){
                  callback([]);
            }else {
                try {
                    callback(JSON.parse(fileContent));
                } catch {
                    callback([]);
                }
    }
            
         });
};
module.exports = class Product {
    constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;

    console.log("title:", this.title);
    console.log("image:", this.imageUrl);
    console.log("price:", this.price);
    console.log("description:", this.description);
}

    // constructor(title, imageUrl, price,description){
    //     this.title = title;
    //     this.imageUrl = imageUrl;
    //     this.price = price;
    //     this.description = description;

    // console.log("title:", this.title);
    // console.log("image:", this.imageUrl);
    // console.log("price:", this.price);
    // console.log("description:", this.description);
    // }
    save(){
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err=>{
                if(err) console.log(err);
                
            });
        });
        
    };
    static fetechAll(callback){
        getProductFromFile(callback);
    };
}