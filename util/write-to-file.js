const fs = require("fs");
const path = require("path")

// -------------(----.join( directory , "fetting out of the folder", "data folder", "file name" ), ..)

module.exports = (data) => {
    try
    {
        fs.writeFileSync(path.join(__dirname, "..", "data", "movies.json"), JSON.stringify(data), "utf-8")
    }
    catch(err){
        console.log(err)
    }
}