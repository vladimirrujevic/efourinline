var igralnaP = $(".igralnaP"), poljeI, polje;

var start = function () {
  drawPolje();
};

var updateGameUi = function () {
  var w = $('.wrap').height(),
    i = $('.igralci').height(),
    ig = w - i,
    igw = $('.igralci').width(), 
    h = 0,
    m = 0;
  $('.igralnaP').height(ig);
  if(igw > ig){
    h = Math.round(ig/6);
  } else {
    h = Math.round(igw/7);
  }
  $('.polje').height(h);
  $('.polje').width(h);
  /*m = Math.round(igw/4 - h/2);
  $('.igralnaP').css("margin-left", m + "px");*/
};

var drawPolje = function () {
  var i, j;
  var poljeI = new Array(6);
  for(i = 0; i<6; i++){
    poljeI[i] = new Array(7);
    for(j = 0; j<7; j++){
      var d = $("<div/>");
      d.addClass("polje");
      d.attr("id", i + "|" + j);
      poljeI[i][j] = d;
      igralnaP.append(d);
    }
    igralnaP.append($("<br/>"));
  }
  updateGameUi();
};