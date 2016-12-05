var igralnaP = $(".igralnaP"), poljeI, polje;

var start = function () {
  drawPolje();
};

var updateGameUi = function () {
  var w = $('.wrap').height(),
    i = $('.igralci').height(),
    ig = w - i;
  $('.igralnaP').height(ig);
};

var drawPolje = function () {
  var i, j, b = $("<br/>");
  var poljeI = [];
  for(i = 0; i<6; i++){
    poljeI[i] = [];
  }
  for(i = 0; i<6; i++){
    for(j = 0; i<7; i++){
      poljeI[i][j] = $("<div/>");
      poljeI[i][j].addClass("polje");
      igralnaP.append(poljeI[i][j]);
    }
    igralnaP.append(b);
  }
};