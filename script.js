const quotes = {
  Science: [
    ["Science is organized knowledge.", "Herbert Spencer"],
    [
      "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
      "Isaac Asimov",
    ],
    [
      "The good thing about science is that it's true whether or not you believe in it.",
      "Neil deGrasse Tyson",
    ],
    ["The science of today is the technology of tomorrow.", "Edward Teller"],
    [
      "An expert is a person who has made all the mistakes that can be made in a very narrow field.",
      "Niels Bohr",
    ],
  ],
  Inspirational: [
    ["The only way to do great work is to love what you do.", "Steve Jobs"],
    ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
    [
      "It does not matter how slowly you go as long as you do not stop.",
      "Confucius",
    ],
    [
      "The only limit to our realization of tomorrow will be our doubts of today.",
      "Franklin D. Roosevelt",
    ],
    ["The best way to predict the future is to create it.", "Peter Drucker"],
  ],
};

let currentCategory = "Science";
let currentQuoteIndex = 0;

const quoteDisplay = document.getElementById("quote");
const dropdown = document.querySelector(".dropdown");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const randomBtn = document.getElementById("randomBtn");
const darkModeSwitch = document.getElementById("theme-toggle");
const decreaseFontBtn = document.getElementById("decreaseFont");
const increaseFontBtn = document.getElementById("increaseFont");

function displayQuote(category, index) {
  const categoryQuotes = quotes[category];
  if (!categoryQuotes) return;
  currentQuoteIndex = (index + categoryQuotes.length) % categoryQuotes.length;
  quoteDisplay.textContent = categoryQuotes[currentQuoteIndex][0];
  quoteDisplay.nextElementSibling.textContent =
    "-" + categoryQuotes[currentQuoteIndex][1];
}

function show(query) {
  document.querySelector(".textBox").value = query;
  displayQuote(query, 0);
}

function showNextQuote() {
  displayQuote(currentCategory, currentQuoteIndex + 1);
}

function showPreviousQuote() {
  displayQuote(currentCategory, currentQuoteIndex - 1);
}

function showRandomQuote() {
  const categoryQuotes = quotes[currentCategory];
  if (!categoryQuotes) return;
  const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
  displayQuote(currentCategory, randomIndex);
}

function toggleDarkMode() {
  if (document.title == "Quotes") {
    document.title = "Quotes-Dark";
  } else {
    document.title = "Quotes";
  }
  document.body.classList.toggle("dark-mode");
  document.documentElement.style.setProperty(
    "--chalkboard-color",
    document.body.classList.contains("dark-mode") ? "#497959" : "#31c362"
  );
  document.documentElement.style.setProperty(
    "--theme-color",
    document.body.classList.contains("dark-mode")
      ? "#666                                       "
      : "#e1e1e1"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    document.body.classList.contains("dark-mode") ? "#eee" : "#111"
  );
  document.documentElement.style.setProperty(
    "--chalkboard-image",
    document.body.classList.contains("dark-mode")
      ? "url('./assets/chalk.png')"
      : "url('./assets/marker.png')"
  );
}

function decreaseFontSize() {
  const currentSize = parseFloat(
    window.getComputedStyle(quoteDisplay).fontSize
  );
  const nextSize = parseFloat(
    window.getComputedStyle(quoteDisplay.nextElementSibling).fontSize
  );
  quoteDisplay.style.fontSize = currentSize - 2 + "px";
  quoteDisplay.nextElementSibling.style.fontSize = nextSize - 2 + "px";
}

function increaseFontSize() {
  const currentSize = parseFloat(
    window.getComputedStyle(quoteDisplay).fontSize
  );
  const nextSize = parseFloat(
    window.getComputedStyle(quoteDisplay.nextElementSibling).fontSize
  );
  quoteDisplay.style.fontSize = currentSize + 2 + "px";
  quoteDisplay.nextElementSibling.style.fontSize = nextSize + 2 + "px";
}

dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};
prevBtn.addEventListener("click", showPreviousQuote);
nextBtn.addEventListener("click", showNextQuote);
randomBtn.addEventListener("click", showRandomQuote);
darkModeSwitch.addEventListener("change", toggleDarkMode);
decreaseFontBtn.addEventListener("click", decreaseFontSize);
increaseFontBtn.addEventListener("click", increaseFontSize);

displayQuote(currentCategory, currentQuoteIndex);
