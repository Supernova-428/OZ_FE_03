const http = require('http')
const port = 4000
const targetObject = {a: 'a', b: 'b'}
const server = http.createServer((req, res) => {
    if(req.method === 'POST' && req.url === '/home'){
        req.on('data', (data) => {
            console.log(data)
            const stringifiedData = data.toString()
            console.log(stringifiedData)
            Object.assign(targetObject, JSON.parse(stringifiedData))
        })
    }else{
        if(req.url == '/home'){
            res.writeHead(200, {
                // 'Content-Type': 'text/plain'
                'Content-Type': 'application/json'
            });
            // res.end('hello, world');
            res.end(JSON.stringify(targetObject));
        }else if(req.url === '/about'){
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>')
            res.write('<body>')
            res.write('<h1>About Page</h1>')
            res.write('</body>')
            res.write('</html>')
        }else{
            res.statusCode = 404
            res.end();
        }
    }
})

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})