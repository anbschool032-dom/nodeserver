   const fs = require('fs');
   const getData = (request,respon) =>{
    const url = request.url;
    const method = request.method;
    // cons method = request.method; this line call synax  errors

    if (url === '/'){
        // respon.write('Hello papa');
        respon.write('<html>');
        respon.write('<head><title>Enter Message here bro </title></head>');
        respon.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>')
        respon.write('</html>');
        // respon.write('Hello papa');
       return respon.end();
    //    respon.end(); runtime error this block code is run but when developer reloade page so alert error 
    }
    if(url === '/message' && method === 'POST'){
  
        const bodydata =[];
        request.on('data',(chunk)=>{
            console.log(chunk);
            
            bodydata.push(chunk);
        })
    return   request.on('end',()=>{
            
            const  sharebodydata = Buffer.concat(bodydata).toString();
            const message = sharebodydata.split('=')[1];
            // const message = sharebodydata.split('=')[0];

            
            // the logical errors all code run with work but code don't give as a result to this page
            //  const message = sharebodydata.split('=')[0];
             
            fs.writeFileSync('chat.txt',message);
   

            respon.statusCode = 302;
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
   module.exports = {
    handler: getData,
    someText: "hello node modules"
   }
//    module.exports.handler = getData;
//    module.exports.someText = "hello node module"
   