const client = require("./client")

async function init() {
    await client.lpush("messages", 1);
    await client.lpush("messages", 2);
    await client.lpush("messages", 3);
    await client.lpush("messages", 4);
    const result = await client.rpop("messages");
    const length = await client.llen("messages");
    console.log(result, length);
}

init()