const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');
app.set('views','views');



const errorController = require('./controllers/error ');
const adminRoutes = require('./routes/admin');
const shopRoutes  = require('./routes/shop'); 
const { extname } = require('path/posix');
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.getError404);

app.use('/',(req,res,next)=>{
    res.send('<p>Home Page</p>');
})
app.listen(8080);