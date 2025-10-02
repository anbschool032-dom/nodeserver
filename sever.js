const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
// const { log } = require('console');
const app = express();
// const expressHubs = require('express-handlebars');
// app.engine('hbs'
//     ,expressHubs({layoutsDir: 'views/mainlayout',
//         defaultLayout:'main-layout',
//         extname:'hbs'
//     }));
// app.engine('hbs', expressHubs());
// app.set('view engine','hbs');

app.set('view engine','ejs');
app.set('views','views');




const adminData = require('./routes/admin');
const shopRoutes  = require('./routes/shop'); 
const { extname } = require('path/posix');
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
     res.status(404).render('404',{pageTitle: 'CAN NOT FOUND U!'});

    //  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
// app.use('/',(req,res,next)=>{
//     console.log('This always run twice');
//     next();
    
// })
// app.use('/create_products',(req,res,next) =>{
//     res.send('<form action="/products" method="POST"><label for="">Products Name  <br>   </label><input type="text" name="title"><button type="submit" >Save</button></form>')
// });

// app.post('/products',(req,res,next)=>{
//     console.log(req.body);
    
//     res.redirect('/');
// });

app.use('/',(req,res,next)=>{
    // console.log('Yes bro bot node js');
    res.send('<p>Home Page</p>');

})
app.listen(8080);
// const server=http.createServer(app)