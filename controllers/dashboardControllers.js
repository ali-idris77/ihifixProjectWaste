const jwt = require('jsonwebtoken')

SECRET = 'trashmastersSecretIsRich';

module.exports.roleRouter = (req , res)=>{
    const token = req.cookies.jwt;
    if(token){
       jwt.verify(token , SECRET , (err , decodedToken) => {
        if(err){
            console.log(err);
           res.status(500).send("server error");
        }else{
           const UserRole = decodedToken.role;
           switch (UserRole.toLowerCase()) {
          case 'admin':
            res.render('admin');
            break;
          case 'seller':
        res.render('user');
            break;
          case 'buyer':
            res.render('buyerDash');
            break;
          default:
            alert('Unknown role');
            break;
        }
        }}
    )}
    else{
     res.redirect('/login');
        }
}