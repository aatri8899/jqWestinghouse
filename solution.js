 function greetUser(userTyped) {
      $("#greeting").text("Hello, " + userTyped);
    }
 function switchImage(picElephant) {
   $("#gallery-main").attr("src", picElephant);
 }
 function changeBackgroundColor() {
      $('body').css("background-color", randomColor); 
 }
 var safeColors = ['00', '33','55','77','cc','ff'];
 var rand = function() {
  return Math.floor(Math.random()*6);
 };
 
 var randomColor = function() {
  var r = safeColors[rand()];
  var g = safeColors[rand()];
  var b = safeColors[rand()];
  return "#"+r+g+b;
 };
 
 