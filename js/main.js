var lblScore1, lblScore2, lblName1, lblName2, hidden, El

hidden = true
El = false

$('#btnX').click(() => window.close())

$('#btnMin').click(() => {
  const { remote } = require('electron')
  remote.BrowserWindow.getFocusedWindow().minimize()
})

$(document).ready(() => {
  initUi()
  if (typeof (require) !== 'undefined') {
    showTitle()
    El = true
  } else {
    hideTitle()
    El = false
  }
  // start()
  $(".igralnaP").slideUp()
  $(".vnosImen").slideDown()
  updateGameUi()
})

let initUi = () => {
  $('#ime1').val('')
  $('#ime2').val('')
  lblName1 = $('.i1 .ime')
  lblScore1 = $('.i1 .score')
  lblName2 = $('.i2 .ime')
  lblScore2 = $('.i2 .score')
  $('.wrap').height($(window).height() - 10)
}

$(window).resize(() => {
  if (hidden === true) {
    $('.wrap').height($(window).height() - 10)
  } else {
    $('.wrap').height($(window).height() - 35)
  }
  updateGameUi()
})

let hideTitle = () => {
  if (!hidden) {
    $('header').slideUp(500)
    $('.wrap').animate({
      top: 0
    },
      500
    )
    hidden = true
    $('.wrap').height($(window).height() - 10)
    updateGameUi()
  }
}

let showTitle = () => {
  if (hidden) {
    $('header').slideDown(500)
    $('.wrap').animate({
      top: 25
    },
      500
    )
    $('.wrap').height($(window).height() - 35)
    updateGameUi()
    hidden = false
  }
}
