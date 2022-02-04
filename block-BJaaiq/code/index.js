const root = document.querySelector("main");
let noOfQuotes = 5;
let index = 0;

function createUI() {
  for (let i = 0; i < noOfQuotes; i++) {
    let box = document.createElement("div");
    let text = document.createElement("p");
    let author = document.createElement("p");
    author.classList.add("author");
    text.innerText = `QuoteText: ${quotes[index].quoteText}`;
    author.innerText = `QuoteAuthor: ${quotes[index].quoteAuthor}`;
    box.classList.add("col");
    box.append(text, author);
    root.append(box);
    index++;
  }
}

document.addEventListener("scroll", () => {
  let top = document.documentElement.scrollTop;
  let height = document.documentElement.clientHeight;
  let scHeight = document.documentElement.scrollHeight;
  if (top + height >= scHeight && index < quotes.length) {
    createUI();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  alert("DOM content is loaded");
  createUI();
});
