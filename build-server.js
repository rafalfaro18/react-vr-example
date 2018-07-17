const nodeStatic = require('node-static');
const file = new nodeStatic.Server('./build');
//Heroku uses random port and forwards to port 80 automatically
//port 3000 is for running locally
const port = process.env.PORT || 3000;
console.log('\nListening on port: ' + port);
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(port);

