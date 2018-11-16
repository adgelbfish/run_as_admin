const express = require("express");
const {spawn} = require("child_process");

const config = require("./config.json");

const app = express();

Object.entries(config.programs).map(([program, command]) => {
  console.log(program)
  console.log(command)
  app.get(`/start/${program}`, (req, res) => {
      spawn(command);
      res.send("started");
  })
})

const port = process.argv[2] || 5000;
app.listen(port, "127.0.0.1", console.log(`listening on ${port}`));