const jwt = require('jsonwebtoken');
const { userDS } = require('../scripts/data');


SECRET = 'trashmastersSecretIsRich';

const requireAuth = (req , res, next)=>{
    const token = req.cookies.jwt;
    if(token){
       jwt.verify(token , SECRET , (err , decodedToken) => {
        if(err){
            console.log(err);
            res.redirect('/login');
        }else{
            console.log(decodedToken);
            next()
        }}
    )}
    else{
     res.redirect('/login');
        }
}


const checkUser = (req , res, next) =>{
     const token = req.cookies.jwt;
    if(token){
       jwt.verify(token , SECRET , (err , decodedToken) => {
        if(err){
            console.log(err);
            res.locals.user = null;
           next()
        }else{
            console.log(decodedToken);
            userDS.findOne({_id: decodedToken.id}, (err, user)=>{
                console.log(user.email);
                res.locals.user = user
            })
            next()
        }}
    )}
    else{
        console.log("no user"); 
     res.locals.user = null;
     next()
        }
}

module.exports = {requireAuth , checkUser}