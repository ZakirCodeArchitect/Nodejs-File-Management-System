const http = require('http')
const getReq = require('./methods/get-request')
const postReq = require('./methods/post-request')
const putReq = require('./methods/put-request')
const deleteReq = require('./methods/delete-request')
let movies = require('./data/movies.json')
// require("dotenv").config(); // in order to use the port from the environment variable.

const PORT = process.env.PORT || 3001;

//
//
//
// ----- SERVER -----
const server = http.createServer((req,res) => {
    req.movies = movies;
    switch(req.method){
        case "GET":
            getReq(req,res)
            break;

        case "POST":
            postReq(req,res)
            break;

        case "PUT":
            putReq(req,res)
            break;

        case "DELETE":
            deleteReq(req,res)
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({title: "Not Found", message: "Route Not Found"}));
            res.end()
    }
})
//
//
//

server.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
})