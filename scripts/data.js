const Datastore = require('nedb');

const userDS = new Datastore(
    {filename:'./db/user.db', autoload: true});
    userDS.ensureIndex({fieldName:'email', unique:true}, (err)=>{
        if(err){
            console.error('Email index error:', err); 
        }
    })

const productDS = new Datastore(
    {filename:'./db/product.db', autoload: true});
    

const reviewDS = new Datastore(
    {filename:'./db/review.db', autoload: true});


const orderDS = new Datastore(
    {filename:'./db/order.db', autoload: true});


const transactionDS = new Datastore(
    {filename:'./db/transaction.db', autoload: true});

module.exports = {userDS, productDS ,reviewDS, orderDS ,transactionDS}