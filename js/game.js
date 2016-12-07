var igralnaP = $(".igralnaP"), poljeI, polje, igra, ig1, ig2;

var start = function () {
  ig1 = new Igralec("ig1", 1);
  ig2 = new Igralec("ig2", 2);
  igra = new Igra(ig1, ig2);
  drawPolje();
};

var potez = function (el) {
  var naslov = el.split("-"), p;
  naslov = igra.potez(naslov[1]);
  p = naslov[0];
  if(p == -1){
    alert("potez ni pravilen.");
  } else if (p === ig1.st){
    $('#' + naslov[1] + '-' + naslov[2]).addClass("R");
  } else {
    $('#' + naslov[1] + '-' + naslov[2]).addClass("Y");
  }
};

var updateGameUi = function () {
  var w = $('.wrap').height(),
    i = $('.igralci').height(),
    ig = w - i,
    igw = $('.igralci').width(),
    h = 0,
    m = 0;
  /*$('.igralnaP').height(ig);*/
  if (igw >= ig) {
    h = Math.round(ig / 6);
  } else {
    h = Math.round(igw / 7);
  }
  $('.polje').height(h);
  $('.polje').width(h);
  //m = Math.round(igw/4);
  /*$('.igralnaP').css("left", $(".igralci").width()/4 + "px");*/
};



/*$(".polje").click(function(){
  sender.addClass("Y");
});*/

var drawPolje = function () {
  var i, j, d, poljeI = new Array(6);
  for (i = 0; i < 6; i++) {
    poljeI[i] = new Array(7);
    for (j = 0; j < 7; j++) {
      d = $("<div/>");
      d.addClass("polje");
      d.attr("id", i + "-" + j);
      d.attr("onclick", "potez('" + i + "-" + j + "')");
      poljeI[i][j] = d;
      igralnaP.append(d);
    }
    igralnaP.append($("<br/>"));
  }
  updateGameUi();
};