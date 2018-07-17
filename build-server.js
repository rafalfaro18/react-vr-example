const nodeStatic = require('node-static');
const file = new nodeStatic.Server('./build');
const port = 3000;
console.log('\nListening on port: ' + port);
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(port);

