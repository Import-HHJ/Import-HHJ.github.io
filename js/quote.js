const quotes = [
  { quote: "Be happy!", author: "HHJ" },
  { quote: "Just Play^^", author: "HHJ" },
  { quote: "FU", author: "GAYLE" },
  { quote: "Why So Serious?^_^", author: "Joker" },
  { quote: "Do the simple.", author: "HHJ" },
  { quote: "Don't do things that you'll regret.", author: "HHJ" },
  { quote: "Hacking is Awesome!", author: "HHJ" },
  { quote: "Toxic;;", author: "BoyWithUke" },
  { quote: "HAHAHAHAHAHA!", author: "Joker" },
  { quote: "-_-", author: "HHJ" },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `by ${todayQuote.author}`;
