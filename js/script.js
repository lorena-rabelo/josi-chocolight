$(document).ready(function () {

    $('#menusuperior').click(function () {
        console.log("testado");
        $(this).toggleClass('active');
        $(".logo").toggleClass('active');
        $(".navtext").toggleClass('active');

    })

})

