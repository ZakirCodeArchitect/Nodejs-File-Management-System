module.exports = (req, res) => {
    let baseurl = req.url.substring(0, req.url.lastIndexOf("/") + 1) //getting the base url api/movies till the last slash we are using lastIndex
    let id = req.url.split("/")[3]; // giving everything in the url

    // Regular Expression for the UUID
    const regexV4 = new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i);


    if (req.url === '/api/movies') // if requested url matches
    {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    } else if (!regexV4.test(id)) // checking if user Id is valid or not
    {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Validation Failed", message: "Not Valid User Id" }));
    } else if (baseurl === "/api/movies/" && regexV4.test(id)) {
        res.setHeader("Content-Type", "application/json");
        let filteredMovie = req.movies.filter((movie) => {
            return movie.id === id;
        })

        if (filteredMovie.length > 0) {
            res.statusCode = 200;
            res.write(JSON.stringify(filteredMovie))
            res.end()
        } else {
            res.statusCode = 404;
            res.write(JSON.stringify({ title: "Movie Not Found", message: "Movie is not here" }))
            res.end()
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Not Found", message: "Route Not Found" }));
    }
};