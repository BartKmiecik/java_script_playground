const http = require('http')
const fs = require('fs')
const port = 3000
const server = http.createServer(function(req, res) {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('index.html', function(error, data) {
        if (error) {
          res.writeHead(404);
          res.write('Error: File Not Found');
        } else {
          res.write(data);
        }
        res.end();
      });
    } else if (req.url === '/module.js') {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      fs.readFile('module.js', function(error, data) {
        if (error) {
          res.writeHead(404);
          res.write('Error: File Not Found');
        } else {
          res.write(data);
        }
        res.end();
      });
    } else {
      res.writeHead(404);
      res.write('Error: Page Not Found');
      res.end();
    }
  });

server.listen(port, function(error){
  if(error){
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
    
  }
})
