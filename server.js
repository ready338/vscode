var http = require('http');
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>nodejs服务</h1>');
    res.end('<p>Content-end</p>');
}).listen(8888);