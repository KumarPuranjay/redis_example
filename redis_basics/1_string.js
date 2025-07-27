const client = require("./client")

async function init() {
    const opr = await client.set("user:1", "Ram");
    await client.expire("user:1", 10); // expire after 10 secs
    const result = await client.get("user:1");


    console.log(opr, result);
    
}


init()