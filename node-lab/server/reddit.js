const fetch = require("isomorphic-fetch");
const { join } = require("path");
const { writeFile } = require("fs");

async function fetchArticles() {
  let res = await fetch("https://reddit.com/r/programmingHumor.json");
  let { data } = await res.json();

  let articles = data.children.map((article) => ({
    id: article.data.id,
    title: article.data.title,
    url: article.data.url,
    author: article.data.author,
  }));

  writeFile(
    join(__dirname, "./popular-articles.json"),
    JSON.stringify({
      articles,
      source_url: "https://reddit.com/r/programmingHumor.json",
    }),
    (err) => {
      if (err) return console.error(err);

      console.log("Successfully extracted and saved reddit articles");
    }
  );
}

try {
  fetchArticles();
} catch (e) {
  console.error(e);
}
