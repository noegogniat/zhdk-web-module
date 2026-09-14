// 1. Link this file from the HTML so it actually runs
// 2. Every three seconds, close all articles and open the next in line
//
// + Hints:
// - The modulo operator is useful for cycling through the articles
// - If the script is loaded too early, it will not find the elements

const articles = document.querySelectorAll("article");
let articleIndex = 0;

function nextArticle() {
  // 1. Close all opened articles
  articles.forEach((article) => article.classList.remove("open"));

  // 2. Open the next article
  articleIndex = (articleIndex + 1) % articles.length;
  articles[articleIndex].classList.add("open");
}

setInterval(nextArticle, 3000);
