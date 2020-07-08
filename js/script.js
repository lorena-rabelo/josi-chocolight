$(document).ready(function () {

    $('#menusuperior').click(function () {
        console.log("testado");
        $(this).toggleClass('active');
        $(".logo").toggleClass('active');
        $(".navtext").toggleClass('active');
    })

})

$('.navmenu a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    let id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 500);
  });
