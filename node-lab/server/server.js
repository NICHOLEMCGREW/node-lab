const { join } = require("path");
const { writeFile } = require("fs");

let chirps = [
  {
    author: "Ben",
    content: "this is my chirp",
    date: new Date().toString(),
  },
  {
    author: "Tanner",
    content: "this is my chirp",
    date: new Date().toString(),
  },
  {
    author: "Cruz",
    content: "this is my chirp",
    date: new Date().toString(),
  },
  {
    author: "Michael",
    content: "this is my chirp",
    date: new Date().toString(),
  },
  {
    author: "Seth",
    content: "this is my chirp",
    date: new Date().toString(),
  },
];

// Write the chirp data to a file called chirps.json
writeFile(
  join(__dirname, "../chirps.json"), // file path
  JSON.stringify({ chirps, count: chirps.length, title: "Chirps" }), // data
  (err) => { // callback after success/failure
    if (err) return console.error(err);

    console.log("Successfully wrote chirps to json file");
  }
);