const { writeFileSync } = require("fs");
const app = require("express")();
const fetch = import("node-fetch");
const { assetHost } = require("../bundle.json");
const { argv } = require("process");

const saveAsset = async (name) => {
    console.log(`Saving ${name}`)
    const assetData = await fetch(`${assetHost}/${name}`, {
        method: "get"
    });
};

app.get("/cache/:name", (req, res) => {
    const asset = req.params.name
    saveAsset(asset)
    return res.send(__dirname +`/cache/${asset}`)
});

app.listen(argv[2], () => console.log("Server is running"))