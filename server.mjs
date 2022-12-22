import http from 'http';

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = [];

    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      body = Buffer.concat(body).toString();
      const data = JSON.parse(body);
      console.log({data});
      
      const normalizedData = Object.keys(data).filter(t => t.match(/^q\d+_.*$/)).reduce((acc, curr) => ({
        ...acc,
        [curr.split('_')[1]]: x[curr]
      }), {})
      console.log({normalizedData});
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    });
  } else {
    res.end('send a POST request');
  }
});

server.listen(process.env.PORT)
