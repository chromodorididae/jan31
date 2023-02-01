let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];


document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
 
  // Do all of your work inside the document.addEventListener  


  // Part 1
  document.getElementById("main-title").innerHTML = "Shorter Title";


  // Part 2
  document.querySelector("body").style.backgroundColor = "red"


  // Part 3 id = #favorite-things
  document.querySelector("#favorite-things li:last-child").remove()
 
  // Part 4 .special-title => . indicates class
  titles = document.querySelectorAll(".special-title")
  for (var i = 0; i < titles.length; i++){
  titles[i].style.fontSize="2rem"    
  }
  //.length =~ apply all, stops loop at final "titles"
 
  // Part 5 - list = children of past races
  races = document.querySelector("#past-races")
  for (var i = 0; i < races.children.length; i++){
    races.children[i].textContent == "Chicago"?
    races.children[i].remove() :
    null
  }


  // Part 6
  let Baltimore = document.createElement("li")
  Baltimore.innerHTML="Baltimore"
  races.appendChild(Baltimore)


  //Part 7
  adventures = document.querySelector('.main')
  var newDiv = document.createElement("div")
  newDiv.classList.add("blog-post")
  newDiv.classList.add("purple")
  var newH1 = document.createElement("h1")
  var newP = document.createElement("p")
  newH1.innerHTML = "Baltimore"
  newP.innerHTML = "Don't hate the player, hate the AAA studio"
  newDiv.appendChild(newH1)
  newDiv.appendChild(newP)
  adventures.innerHTML+=newDiv.outerHTML


  //Part 8
  let newQuote = document.querySelector("#quote-title").addEventListener("click", randomQuote)


  // Part 9
  let blogPost = document.querySelectorAll(".blog-post")
  blogPost.forEach(function(postDiv){
    postDiv.addEventListener("mouseout", function(){
      postDiv.classList.toggle("purple")
      postDiv.classList.toggle("red")
    })
    postDiv.addEventListener("mouseenter", function(){
      postDiv.classList.toggle("purple")
      postDiv.classList.toggle("red")
    })


  })


});



