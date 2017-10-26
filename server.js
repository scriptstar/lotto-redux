const express = require("express");
const path = require("path");
const _ = require("lodash-node/compat");
const concat = require("lodash.concat");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Put all API endpoints under '/api'
app.get("/api/lotto", (req, res) => {
  const count = 5;

  // Generate 6 numbers 
  const numbers = Array.from(Array(count).keys()).map(i =>
    _.sortBy(_.sample(_.range(1, 59), 6))
  );

// Return them as json
  res.json(numbers);

  console.log(`Sent ${count} lotto rows`);
});

app.get("/api/euro", (req, res) => {
  const count = 5;

  // Generate 5 numbers 
  const numbers = Array.from(Array(count).keys()).map(i =>
    concat(_.sortBy(_.sample(_.range(1, 50), 5)), _.sortBy(_.sample(_.range(1, 12), 2)))
  );

  res.json(numbers);

  console.log(`Sent ${count} euro rows`);
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Lotto random number generator listening on ${port}`);
