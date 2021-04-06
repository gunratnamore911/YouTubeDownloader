require("dotenv").config();
const express = require("express");
const colors = require("colors");
const app = express();
const ytdl = require("ytdl-core");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api/videos", require("./routes/api/getvideos"));

app.get("/download", (req, res) => {
  try {
    var URL = req.query.URL;
    res.header("Content-Disposition", 'attachment; filename="video.mp4"');
    ytdl(URL, {
      format: "mp4",
    }).pipe(res);
  } catch (error) {
    console.log(error);
  }
});

//serving static assests

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`.cyan.bold);
});
