var lblScore1, lblScore2, lblName1, lblName2, hidden = true, El = false;

$("#btnX").click(function () {
  window.close();
});

$("#btnMin").click(function () {
  const { remote } = require('electron');
  remote.BrowserWindow.getFocusedWindow().minimize();
});

$(document).ready(function(){
  initUi();
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
    El = true;
  } else {
    hideTitle();
  }
  updateGameUi();
});

var initUi = function(){
  lblName1 = $(".i1 .ime");
  lblScore1 = $(".i1 .score");
  lblName2 = $(".i2 .ime");
  lblScore2 = $(".i2 .score");
  $(".wrap").height($(window).height() - 10);
};

$(window).resize(function(){
  if(hidden === true){
    $(".wrap").height($(window).height() - 10);
  }else{
    $(".wrap").height($(window).height() - 35);
  }
  updateGameUi();
});


var hideTitle = function(){
  if(!hidden){
    $("header").slideUp(500);
    $(".wrap").animate({
      top: 0
      },
      500
    );
    hidden = true;
    $(".wrap").height($(window).height() - 10);
    updateGameUi();
  }

}

var showTitle = function(){
  if(hidden){
    $("header").slideDown(500);
    $(".wrap").animate({
      top: 25
      },
      500
    );
    $(".wrap").height($(window).height() - 35);
    updateGameUi();
    hidden = false;
  }
}
