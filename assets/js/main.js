// Syntax highlighting

// Add the css theme file
// document.head.appendChild(document.createElement("link")).rel = "stylesheet";
// document.head.appendChild(
//   document.createTextNode(
//     `link rel="stylesheet" href="${window.location.origin}/assets/styles/1c-light.css"`
//   )
// );

// const theme = "a11y-light";
const theme = "atom-one-light";
const themePath = `/assets/js/highlight/styles/${theme}.css`;
const themeLink = document.createElement("link");
themeLink.rel = "stylesheet";
themeLink.href = themePath;
document.head.appendChild(themeLink);

document.querySelectorAll("*:not(pre) > code").forEach((block) => {
  hljs.highlightElement(block);
});

hljs.highlightAll();
