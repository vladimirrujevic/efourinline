var lblScore1, lblScore2, lblName1, lblName2;

$(document).ready(function(){
  initUi();
  /*var i1 = prompt("Igralec 1, vnesite ime:", "Igralec 1");
  var i2 = prompt("Igralec 2, vnesite ime:", "Igralec 2");
  lblName1.html(i1);
  lblName2.html(i2);*/
  mainWindow.minimize();
});

var initUi = function(){
  lblName1 = $(".i1 .ime");
  lblScore1 = $(".i1 .score");
  lblName2 = $(".i2 .ime");
  lblScore2 = $(".i2 .score");
};
