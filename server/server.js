const express = require('express');
const app = express();

app.get('/hi', (req, res) => {
  res.json({ "hi": "hello" });
})

app.listen(5000, () => { console.log("Server started on port 5000") });