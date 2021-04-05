require("dotenv").config();
const express = require("express");
const colors = require("colors");
const app = express();
const ytdl = require("ytdl-core");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api/videos", require("./routes/api/getvideos"));

app.get("/", (req, res) => {
  res.send("<h1>hi Gunratna More!!!</h1>");
});

app.get("/download", (req, res) => {
  var URL = req.query.URL;

  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(URL, {
    format: "mp4",
  }).pipe(res);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`.cyan.bold);
});
