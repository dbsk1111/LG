$(document).ready(function() {

  $('dd').css('display','none')
  $('dt').click(function(){
    if( !$(this).hasClass('on')){
      $('dt').removeClass('on')
      $('dd').slideUp()
      $(this).addClass('on')
      $(this).next().slideDown()
    }else{
      $(this).removeClass('on')
      $(this).next().slideUp()
    }
  })
})
