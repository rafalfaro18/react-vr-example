const nodeStatic = require('node-static');
const file = new nodeStatic.Server('./build');
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);
