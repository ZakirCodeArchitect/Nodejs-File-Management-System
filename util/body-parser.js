module.exports = async (request) => {
    return new Promise ((resolve,reject) => {
        try{
            // Nodejs is event driven so we will create an Stream of Data
            let body = "";
            request.on("data", (chunk) => {
                body += chunk;
            });

            request.on("end", () => {
                resolve(JSON.parse(body)); // parsing because we want the data in the form of the string.
            })
        }
        catch(err)
        {
            console.log(err)
            reject(err);
        }
    })
}