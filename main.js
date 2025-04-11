// const para = document.createElement("p");
// para.innerText = "thank you";
// document.body.appendChild(para);


// window.addEventListener("DOMContentLoaded",() => {
// const para = document.createElement("p");
// para.innerText = "thank you";
// document.body.appendChild(para)
// // console.log("cool");
// })

const Quotes = [
  {
    text: "Life is tough my darling, but so are you.",
    Author: "Stephanie Bennett Henry",
  },
  {
    text: "Some goals are so worthy, it's glorious even to fail!",
    Author: "Manoj Kumar Pandey",
  },
  {
    text: "It is never too late to be what you might have been",
    Author: "George Eliot",
  },
  {
    text: "Pain is inevitable. Suffering is optional",
    Author: "Haruki Murakami",
  },
  {
    text: "Be kind, for everyone you meet is fighting a hard battle.",
    Author: "Plato",
  },
  {
    text: "Unable are the loved to die for love is immortality.",
    Author: "Emily Dickinson",
  },
];

const quoteElement = document.getElementById("quoteText");
const quoteAuthorElement = document.getElementById("quoteAuthor")
const nextQuoteBtn = document.getElementById("nextQuote")

nextQuoteBtn.addEventListener("click", () => {
    const randomQuote = Math.floor(Math.random() * Quotes.length)

    const selectedQuote = Quotes[randomQuote]

    quoteElement.textContent = `${selectedQuote.text}`;
    quoteAuthorElement.textContent = `${selectedQuote.Author}`;
})