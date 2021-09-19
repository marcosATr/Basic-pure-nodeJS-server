const http = require('http')
const routes = require('./routes')
const server = http.createServer(routes)


const port = 3000
const host = 'localhost'

// server.on('request', (req, res) => {

// })

server.listen(port)



