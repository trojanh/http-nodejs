import { createServer } from 'http';

createServer((req, res) => {
  if(req.body){
    console.log({body: req.body})
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(req.body);
  } 
  else{
  res.write('Hello World!');
  res.end();
  }
  
}).listen(process.env.PORT);
