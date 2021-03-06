// use strict
"use strict";

var quotes = [
    'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.	- Dr. Seuss',
    'Do your own thing on your own terms and get what you came here for. - Oliver James',
    'Flatter yourself critically. - Willis Goth Regier',
    'Do what you feel in your heart to be right, for you’ll be criticized anyway. - Eleanor Roosevelt',
    'Whenever you find yourself on the side of the majority, it is time to pause and reflect. - Mark Twain',
    'I will not let anyone walk through my mind with their dirty feet. - Mahatma Gandhi',
    'Better to write for yourself and have no public, than to write for the public and have no self. - Cyril Connolly',
    'We must not allow other people’s limited perceptions to define us. - Virginia Satir',
    'Don’t look for society to give you permission to be yourself. - Steve Maraboli',
    'If things go wrong, don’t go with them. - Roger Babson',
    'Wanting to be someone else is a waste of who you are. - Kurt Cobain',
    'Tension is who you think you should be. Relaxation is who you are. - Chinese Proverb',
    'Where’s your will to be weird? - Jim Morrison',
    'Some people say you are going the wrong way, when it’s simply a way of your own. - Angelina Jolie',
    'Remember to always be yourself. Unless you suck. - Joss Whedon',
    'Do what you can, with what you have, where you are. - Theodore Roosevelt',
    'Be yourself; everyone else is already taken. - Oscar Wilde',
    'I took a deep breath and listened to the old bray of my heart. I am. I am. I am. - Silvia Plath',
    'To find yourself, think for yourself. - Socrates',
    'If you seek authenticity for authenticity’s sake you are no longer authentic. - Jean Paul Sartre',
    'If you cannot be a poet, be the poem. - David Carradine',
    'Be there for others, but never leave yourself behind. - Dodinsky',
    'Do what you must, and your friends will adjust. - Robert Brault',
    'This above all: to thine own self be true. - William Shakespeare',
    'If you make the Internet, live on the internet. - Matt Mullenweg'
];
// quote source: http://www.lifehack.org/articles/lifestyle/30-the-best-quotes-ever.html

// function to generate and return a new quote at random from the quotes array
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    return quotes[randomNumber];
}

// function to load a first random quote on the page
function firstQuote() {
	var pageLoadQuote = newQuote();
	document.getElementById('quoteHere').innerHTML = pageLoadQuote;
}

// function to take the generated quote and display when quote button is clicked
function presentQuote() {
    var displayQuote = newQuote();
    document.getElementById('quoteHere').innerHTML = displayQuote;
}

// function to tweet the generated quote when the tweet button is clicked
function tweetQuote() {
    var quote = document.getElementById('quoteHere');
    var tweet = quote;
    var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet.innerText);
    window.open(tweetLink, '_blank');
}
