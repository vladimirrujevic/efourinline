var lblScore1, lblScore2, lblName1, lblName2;

$("#btnX").click(function () {
  window.close();
});

$("#btnMin").click(function () {
  const { remote } = require('electron');
  remote.BrowserWindow.getFocusedWindow().minimize();
});

$(document).ready(function(){
  initUi();
  updateGameUi();
  start();
  /*var i1 = prompt("Igralec 1, vnesite ime:", "Igralec 1");
  var i2 = prompt("Igralec 2, vnesite ime:", "Igralec 2");
  lblName1.html(i1);
  lblName2.html(i2);*/
  //mainWindow.minimize();
  //display the title bar if using electron, hide it otherwise
  var e = require("electron")
  if(typeof(e) === 'object'){
    showTitle();
  }
});

var initUi = function(){
  lblName1 = $(".i1 .ime");
  lblScore1 = $(".i1 .score");
  lblName2 = $(".i2 .ime");
  lblScore2 = $(".i2 .score");

};

$(window).resize(function(){
  updateGameUi();
});

var hidden = true;
var hideTitle = function(){
  if(!hidden){
    $("header").animate(
      {
        top: -25
      },
      500
    );
    $(".wrap").animate({
      top: 0
      },
      500
    );
    $(".wrap").height(document.height);
    $(".wrapG").height(document.height - 110)
    hidden = true;
    updateGameUi();
  }

}

var showTitle = function(){
  if(hidden){
    $("header").animate(
      {
        top: 0
      },
      500
    );
    $(".wrap").animate({
      top: 25
      },
      500
    );
    $(".wrap").height(document.height - 25);
    $(".wrapG").height(document.height - 110 - 25)
    updateGameUi();
    hidden = false;
  }
}
