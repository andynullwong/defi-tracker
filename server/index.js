const express = require("express");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/wallet/:address", (req, res) => {
  const yieldwatch = "https://www.yieldwatch.net/api/all";
  const address = req.params.address;
  const platforms = ["beefy"];

  const url = `${yieldwatch}/${address}?platforms=${platforms.join()}`;

  fetch(url)
    .then((res) => res.json())
    .then((json) => res.send(json));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
