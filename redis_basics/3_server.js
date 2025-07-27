const express = require("express");
const app = express();
const client = require("./client")

const axios = require("axios").default;

app.get('/', async (req, res) => {
    const posts = await client.get("posts");
    
    if(posts) {
        console.log("cached");
        return  res.json(JSON.parse(posts));
    }

    const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    await client.set("posts", JSON.stringify(result.data));

    await client.expire("posts", 30); // expire after 30 sec
    console.log(result.data);
    
    return res.json(result.data);
})

app.listen(9000)