//DEPENDENCIES
const express = require('express');
const cookieParser = require('cookie-parser')

// MODULE IMPORTS
//ROUTES
const authRoutes = require('./ROUTES/authRoutes');
const dashRoutes = require('./controllers/dashboardControllers')
const productRoutes = require('./ROUTES/productRoutes');
const { requireAuth, checkUser} = require('./middlewares/authMiddlewares');

// APP DECLARATION
const app = express();
const port = 8080;


//  MIDDLEWARES AND STATIC FILES
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use(cookieParser())

//ROUTES
app.get('*', checkUser)
app.get('',requireAuth ,(req,res)=>{ res.render('index')})
app.get('/awareness', (req,res)=>{
    res.render('awareness')
})
app.get('/dashboard', requireAuth, dashRoutes.roleRouter)
app.use(authRoutes)

















app.listen(port, ()=>{ console.log('listening at port: '+ port)});