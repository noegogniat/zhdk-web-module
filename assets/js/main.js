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

// Link toggle to examples

function runBindedFunction(element) {
  try {
    window[element.dataset.function](element);
  } catch (error) {
    if (element.dataset.function)
      console.error(
        `Error running function ${element.dataset.function} with element ${element}`,
        error
      );
    else console.error(error);
  }
}

function bindExampleToTriggers() {
  document.querySelectorAll(".example-toggle").forEach((label) => {
    const input = label.querySelector("input");
    input.nextSibling.textContent = input.checked
      ? "example active"
      : "example inactive";
    input.addEventListener("change", function () {
      this.nextSibling.textContent = this.checked
        ? "example active"
        : "example inactive";
      runBindedFunction(this);
    });
    runBindedFunction(input);
  });

  document.querySelectorAll(".example-button").forEach((button) => {
    button.addEventListener("click", function () {
      runBindedFunction(this);
    });
  });
}

if (document.readyState === "complete") bindExampleToTriggers;
else window.addEventListener("load", bindExampleToTriggers);
