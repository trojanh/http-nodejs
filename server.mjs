import { createServer } from 'http';

createServer((req, res) => {
  console.log("REQUEST ARRIVED", req)
 if(req.method == 'POST'){
    
        var jsonString;

        req.on('data', function (data) {
            jsonString = JSON.parse(data);
        });

        req.on('end', function () {
            serverNext(req, res, JSON.stringify(jsonString));
        });
  } 
  else{
  res.write('Hello World!');
  }
  res.end()
  
}).listen(process.env.PORT);
