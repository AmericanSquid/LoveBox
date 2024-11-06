// public/app.js

// Array of love-themed quotes
const quotes = [
  { text: "I love you, not only for what you are, but for what I am when I am with you.", author: "Roy Croft" },
  { text: "When I saw you, I fell in love, and you smiled because you knew.", author: "Arrigo Boito" },
  { text: "I seem to have loved you in numberless forms, numberless times, in life after life, in age after age forever.", author: "Rabindranath Tagore" },
  { text: "Every love story is beautiful, but ours is my favorite.", author: "Anonymous" },
  { text: "I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.", author: "Leo Christopher" },
  { text: "I would rather spend one lifetime with you than face all the ages of this world alone.", author: "J.R.R. Tolkien" },
  { text: "If I know what love is, it is because of you.", author: "Hermann Hesse" },
  { text: "My love for you is a journey; starting at forever, and ending at never.", author: "Anonymous" },
  { text: "I’ve tried so many times to think of a new way to say it, and it’s still I love you.", author: "Zelda Fitzgerald" },
  { text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.", author: "Maya Angelou" }
];

// Get the necessary elements from the DOM
const openBoxButton = document.getElementById('openBox');
const box = document.getElementById('box');
const flower = document.getElementById('flower');
const quoteElem = document.getElementById('quote');
const message = document.getElementById('message');

// Add the event listener for opening the box
openBoxButton.addEventListener('click', () => {
  // Hide the initial message
  message.classList.add('hidden');

  // Open the box
  box.classList.add('opened');

  // Show the flower image and the quote
  flower.classList.remove('hidden');
  quoteElem.classList.remove('hidden');

  // Select a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Display the selected quote
  quoteElem.textContent = `"${randomQuote.text}" — ${randomQuote.author}`;
});
