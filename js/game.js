var igralnaP, poljeI, polje, igra, ig1, ig2
igralnaP = $('.igralnaP')

var start = () => {
  drawPolje()
  if (ig1 === undefined && ig2 === undefined) {
    ig1 = new Igralec(vnosImen(1), 1)
    ig2 = new Igralec(vnosImen(2), 2)
    // igralnaP.slideToggle();
  }
  igra = new Igra(ig1, ig2)
  displayInfo()
}

var vnosImen = i => {
  var ime = 'Electron' + i
  if (!El) {
    ime = prompt('Igralec ' + i + ', vnesite svoje ime:', 'Igralec' + i)
  }
  return ime
}

var potez = el => {
  var naslov, p
  naslov = el.split('-')
  naslov = igra.potez(naslov[1])
  p = naslov[0]
  if (p === -1) {
    alert('potez ni pravilen.')
  } else {
    if (p === ig1.st) {
      $('#' + naslov[1] + '-' + naslov[2]).addClass('R')
    } else {
      $('#' + naslov[1] + '-' + naslov[2]).addClass('Y')
    }
    if (igra.preveriZmaga(naslov[1], naslov[2], naslov[0]) === true) {
      zmagovalec(naslov[0])
    } else if (igra.preveriNeodloceno()) {
      zmagovalec(0)
    }
  }
}

var zmagovalec = z => {
  if (z === ig1.st) {
    ig1.zmaga()
    alert('Zmagovalec je ' + ig1.ime)
  } else if (z === ig2.st) {
    ig2.zmaga()
    alert('Zmagovalec je ' + ig2.ime)
  } else {
    alert('Igra je neodločena.')
  }
  igra.lock()
  displayInfo()
}

var displayInfo = () => {
  lblName1.html(ig1.ime)
  lblName2.html(ig2.ime)
  lblScore1.html(ig1.zmage)
  lblScore2.html(ig2.zmage)
}

var updateGameUi = () => {
  var w, i, ig, igw, h
  w = $('.wrap').height()
  i = $('.igralci').height()
  ig = w - i
  igw = $('.igralci').width()
  h = 0
  if (igw >= ig) {
    h = Math.round(ig / 6)
  } else {
    h = Math.round(igw / 7)
  }
  $('.polje').height(h)
  $('.polje').width(h)
}

var drawPolje = () => {
  var i, j, d, poljeI
  poljeI = []
  for (i = 0; i < 6; i++) {
    poljeI[i] = []
    for (j = 0; j < 7; j++) {
      d = $('<div/>')
      d.addClass('polje')
      d.attr('id', i + '-' + j)
      d.attr('onclick', 'potez("' + i + '-' + j + '")')
      poljeI[i][j] = d
      igralnaP.append(d)
    }
    igralnaP.append($('<br/>'))
  }
  updateGameUi()
}
