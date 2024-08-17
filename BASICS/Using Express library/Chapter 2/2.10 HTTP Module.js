const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('<h1>Hey Node! You are good to go!!!</h1>');
});

server.listen(4444,()=>{
console.log('Server Started on port 4444')})