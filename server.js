
const fs = require('fs');
var url = require('url');
var http = require('http');

// app.get('/', function (req, res) {
//    console.log(req.originalUrl); 
//   res.sendFile(path.join(__dirname,'/index.html'));
// });
const port = process.env.PORT || 5001;
http.createServer(function (req, res) {
	
	var file = url.parse(req.url, true);
    var filename = "." + file.pathname;
    console.log(filename);
	if (file.pathname === '/') {
        fs.readFile('index.html',function(err,data){
            if (err) throw err;				
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else {    
	fs.readFile(filename,function(err,data){
        if (err) throw err;				
            if(filename.includes("css")) {		
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(data);
            } else if (filename.includes("js")) {		
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.end(data);	
            } else if (filename.includes("jpg")) {		
                res.writeHead(200, {'Content-Type': 'text/jpg'});
                res.end(data);	
            } else {}
    });
}
}).listen(port);
    

