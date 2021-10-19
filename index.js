if(performance.navigation.type === performance.navigation.TYPE_RELOAD){

  /* <------------------------- Variable Declarations -------------------------> */

  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;
  var randomImage1 = "images/dice" + player1 + ".png";
  var randomImage2 = "images/dice" + player2 + ".png";
  var image1 =  document.querySelectorAll("img")[0];
  var image2 =  document.querySelectorAll("img")[1];

  /* <------------------------- Game logic -------------------------> */

  if(player1 > player2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!!! 🤝";
  }

  /* <------------------------- Change Image Attributes -------------------------> */

  image1.setAttribute("src", randomImage1);
  image2.setAttribute("src", randomImage2);
}
