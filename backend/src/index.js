const express = require("express");
const axios = require("axios");
const config = require("config");
const cors = require("cors");

const PORT = config.get("PORT");
const url = config.get("COVID_DATA_URL");

const app = express();

app.use(cors());

app.get("/", function (req, res) {
  axios
    .get(url)
    .then(function (data) {
      res.send({
        status: data.status,
        data: data.data,
      });
    })
    .catch(function (err) {
      res.send({
        status: err.response.status,
        data: err.message,
      });
    });
});

app.listen(PORT, () => {
  console.log("Server running on localhost:", PORT);
});
