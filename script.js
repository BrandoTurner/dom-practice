let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1

  function changeMainTitle(){
    let title = document.getElementById('main-title')
    title.innerHTML = "Welcome to DOM's homepage"
  }

  changeMainTitle()

  // Part 2

  function changeBodyBackground(){
    document.body.style.background = "navy";
  }
  changeBodyBackground();


  // Part 3

function removeFavorite(){
  document.querySelector('li:last-child').remove('li:last-child')
}
removeFavorite();
  

  // Part 4

function changeTitle(){
    let specialTitle = document.getElementsByClassName('special-title');

    for(let i = 0; i < specialTitle.length; i++){
      specialTitle[i].style.fontSize = '2rem';
      
    }
  }
  changeTitle();

  // Part 5

  function removePastRace() {
    let pastRace = document.getElementById('past-races').children[3];
    pastRace.remove();
    
  }

  removePastRace();
    

  
  // Part 6

  function addPastRace(){
      let item = document.createElement('li');
      let nyc = document.createTextNode('New York');
      item.appendChild(nyc)
      document.getElementById('past-races').appendChild(item)
  }
  
  addPastRace();

  // Part 7

  function newPost(){

    let div = document.createElement('div');
    let header = document.createElement('h1');
    let para = document.createElement('p');

    header.textContent = 'New York City';
    para.textContent = 'I DROVE THROUGH THE GRAND CENTRAL SUBWAY STATION';
    div.className = 'blog-post purple';
    div.appendChild(header);
    div.appendChild(para);

    let main = document.querySelector('.main')
    main.appendChild(div);

  }

  newPost();
}
