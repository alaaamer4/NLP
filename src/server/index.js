const axios = require("axios");
const cors = require("cors");
const ENV = require("dotenv");
const express = require("express");

ENV.config();
const app = express();
const API_KEY = process.env.API_KEY;

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

const getResponse = async (url) => {
  const response = await axios.get(
    "https://api.meaningcloud.com/sentiment-2.1",
    {
      params: {
        key: API_KEY,
        lang: "en",
        url,
      },
    }
  );
  return response.data;
};

app.get("/api/analyse", async (req, res) => {
  const data = await getResponse(req.query.url);
  res.json(data);
});

app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});

module.exports = app;
