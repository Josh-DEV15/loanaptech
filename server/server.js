const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server works");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});