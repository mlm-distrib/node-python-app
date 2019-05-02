const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

app.get("/getdata", getData);

function getData(req, res) {
  const spawn = require("child_process").spawn;
  const process = spawn("python", [
    "./test.py",
    req.query.firstname,
    req.query.firstname
  ]);
  process.stdout.on("data", data => {
    res.send(data.toString());
  });
}
