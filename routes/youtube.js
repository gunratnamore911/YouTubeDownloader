require("dotenv").config();
const axios = require("axios");

const KEY = process.env.KEY;

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 20,
    key: KEY,
  },
});

module.exports = youtube;
