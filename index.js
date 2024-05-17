const express = require("express");
const app = express();
const port = 8080;

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
