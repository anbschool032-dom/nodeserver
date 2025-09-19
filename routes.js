   const fs = require('fs');
   const greeting = (request,respon) =>{
    const url = request.url;
    const method = request.method;

    if (url === '/'){
        respon.write('<html>');
        respon.write('<head><title>Enter Message here bro </title></head>');
        respon.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>')
        respon.write('</html>');
       return respon.end();
    }
    if(url === '/user' && method === 'POST'){
  
        const bodydata =[];
        request.on('data',(chunk)=>{
            // console.log(chunk);
            bodydata.push(chunk);
        })
    return   request.on('end',()=>{
            
            const  sharebodydata = Buffer.concat(bodydata).toString();
            const message = sharebodydata.split('=')[1];
            fs.writeFileSync('chat.txt',message);
   

            respon.statusCode = 404;
            respon.setHeader('Location','/');
            return respon.end();
        })

   
    }
        respon.setHeader('Content-Type','text/html');
        respon.write('<html>');
        respon.write('<head><title>My first node js </title></head>');
        respon.write('<body><h1>hello kon papa</h1></body>')
        respon.write('</html>');
   }
//    module.exports = getData;
// this module.exports obj proporty
//    module.exports = {
//     handler: getData,
//     someText: "hello node modules"
//    }
   module.exports.handler = getData;
   module.exports.someText = "hello nofde module"
   