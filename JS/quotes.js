const quotes = [
  {
    quote: "Be yourself; everyone else is already taken",
    author: "Oscar",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: "Einstein",
  },
  {
    quote: "So many books, so little time",
    author: "Frank",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
