var rpc = require("discord-rpc")
rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "details",
            state : "state",
            assets : {
                large_image : "key",
                large_text : "text",
                small_image : "key",
                small_text : "text"
            },
            buttons : [
                {label : "text" , url : "url"},
                {label : "text" , url : "url"}
            ]
        }
    })
});

client.login({ clientId : "ID_DU_BOT" }).catch(console.error);