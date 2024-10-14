const writeToFile = require("../util/write-to-file")

module.exports = (req, res) => {
    let baseurl = req.url.substring(0, req.url.lastIndexOf("/") + 1) //getting the base url api/movies till the last slash we are using lastIndex
    let id = req.url.split("/")[3]; // giving everything in the url

    // Regular Expression for the UUID
    const regexV4 = new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i)

    if (!regexV4.test(id)) // checking if user Id is valid or not
    {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Validation Failed", message: "Not Valid User Id" }));
    } else if (baseurl === "/api/movies/" && regexV4.test(id)) {
        const index = req.movies.findIndex((movie) => {
            return movie.id === id;
        })

        if (index === -1) {
            res.statusCode = 404;
            res.write(JSON.stringify({ title: "Movie Not Found", message: "Movie is not here" }))
            res.end()
        } else {
            req.movies.splice(index, 1) // deleting that movie
            writeToFile(req.movies); // writing remaining movies to the file
            res.writeHead(204, { "Content-Type": "application/json" }); // sending back response
            res.end(JSON.stringify(req.movies))
        }
    }
}