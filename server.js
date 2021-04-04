require("dotenv").config();
const express = require("express");
const colors = require("colors");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));

app.use("/api/videos", require("./routes/api/getvideos"));
app.get("/", (req, res) => {
  res.send("<h1>hi Gunratna More!!!</h1>");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`.cyan.bold);
});
