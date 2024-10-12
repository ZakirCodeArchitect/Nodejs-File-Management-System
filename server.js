const http = require('http')

const PORT = process.env.PORT || 3001;

const server = http.createServer((req,res) => {

})

server.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
})