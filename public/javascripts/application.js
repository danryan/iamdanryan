$(document).ready(function(){  
  titles = [
    "Professional Instigator",
    "Timecop",
    "Beastmaster",
    "Because You're Worth It",
    "The Happiest Place on Earth",
    "Internet Superhero",
    "31 Flavors",
    "Barely Legal",
    "Beefcake",
    "Mayor of Lansing, MI",
    "The Wolf",
    "World Champion",
    "Neckbeard"
  ]
  
  function getTitle() {
     return titles[Math.floor(Math.random() * titles.length)];
  }
  
  $("h3.title").empty().append(getTitle());
});
