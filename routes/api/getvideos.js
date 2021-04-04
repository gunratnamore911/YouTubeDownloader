const express = require("express");
const youtube = require("../youtube");
const router = express.Router();

router.post("/getvideos", async (req, res) => {
  try {
    const { term } = req.body;

    if (term) {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });

      return res.status(200).json(response.data.items);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
