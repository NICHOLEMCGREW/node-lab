Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@NICHOLEMCGREW 
Bryantellius
/
tc-node-6
Public
Code
Issues
Pull requests
1
Actions
Projects
Wiki
Security
Insights
tc-node-6/walkthroughs/node-lab/downloader.js /
@Bryantellius
Bryantellius UPDATE: express walkthrough part 1
Latest commit 8fdc00a 3 hours ago
 History
 1 contributor
40 lines (32 sloc)  976 Bytes
   
const { readFile, writeFile, existsSync, mkdirSync } = require("fs");
const { join, extname } = require("path");
const fetch = require("isomorphic-fetch");

async function downloadImage(url, id) {
  let res = await fetch(url);
  let data = await res.arrayBuffer();

  if (!existsSync("./downloads")) {
    mkdirSync("./downloads");
  }

  writeFile(
    join(__dirname, "./downloads", id + extname(url)),
    Buffer.from(data),
    (err) => {
      if (err) return console.log(err);

      console.log("Successfully downloaded from " + url);
    }
  );
}

let imageExts = [".jpg", ".jpeg", ".png", ".gif", ".mov", ".mp4"];

readFile(join(__dirname, "./popular-articles.json"), (err, data) => {
  if (err) return console.log(err);

  let { articles } = JSON.parse(data.toString());

  for (let { url, id } of articles) {
    if (imageExts.includes(extname(url))) {
      try {
        downloadImage(url, id);
      } catch (e) {
        console.error(e);
      }
    }
  }
});
