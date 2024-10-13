const crypto = require("crypto") // using crypto core module also
const requestBodyparser = require("../util/body-parser")
const writeToFile = require("../util/write-to-file")

module.exports = async (req,res) => {
    if(req.url === "/api/movies")
    {
        try 
        {
            let body = await requestBodyparser(req);
            // console.log("Request Body : ", body);
            body.id = crypto.randomUUID();  // creating a random UUID for the data to be inserted.
            req.movies.push(body);
            writeToFile(req.movies);
            // Http status code: 201
            res.writeHead(201, {"Content-Type": "application/json" });
            res.end();
        }
        catch(err)
        {
            console.log(err)
            res.writeHead(400, {"Content-Type": "application/json"});
                res.end(JSON.stringify({
                    title: "Validation Failed", 
                    message: "Request Body is not Valid"
                })
            );
        } 
    }
    else
    {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title: "Not Found", message: "Route Not Found"}));
    }
}