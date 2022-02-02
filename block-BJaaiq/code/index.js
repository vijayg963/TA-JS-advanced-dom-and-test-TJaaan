const root = document.querySelector("main");
// let strong = document.createElement("strong");
// strong.innerText = `QuoteText:`;

function createUI() {
  quotes.forEach((elm) => {
    let text = document.createElement("p");
    text.innerText = `QuoteText: ${elm.quoteText}`;
    let author = document.createElement("p");
    author.innerText = `QuoteAuthor: ${elm.quoteAuthor}`;
    let box = document.createElement("div");
    box.classList.add("col");
    box.append(text, author);
    root.append(box);
  });
}

createUI(quotes);

root.addEventListener(`scroll`);
