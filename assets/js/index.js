// PROMO AND BENEFITS LOGO RESIZE 

$(document).ready(function () {
    $(window).trigger('resize');
});


$(window).resize(function () {
    var width = $("#circle").width();
    $(".promos").height(width)


    var height = $("#logoBenefits").height();
    height = (height / 2)
    $(".logo-benefits-section").css('top', '-' + height + 'px')
});


// PLUGIN SCROLL 

AOS.init();